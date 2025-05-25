<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let canvas;

  const { data } = $props();
  const scorecards = data?.scorecards ?? [];

 const sortedScorecards = [...scorecards]
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(-25);

  const labels = sortedScorecards.map(card =>
    new Date(card.date).toLocaleDateString('de-CH', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    })
  );

  const scores = sortedScorecards.map(card => Number(card.scoreTotal));

  onMount(() => {
    if (!canvas || !labels.length || !scores.length) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Scoreverlauf',
            data: scores,
            borderColor: 'rgba(28, 57, 31, 1)',
            backgroundColor: 'rgba(255, 255, 255, 255)',
            borderWidth: 1.5,
            tension: 0.3,
            fill: false,
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
    padding: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    }
  },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Score'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Datum'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'black'
            }
          }
        }
      }
    });
  });
</script>

<style>
  .chart-wrapper {
    width: 100%;
    height: 500px;
  }

  canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
    background-color: #e1ebe4c5;
    border: 1.5px solid #234727ed;
    border-radius: 12px;
  }
</style>
<br><br>
<h2 style="text-align: center;"><strong>Scoreverlauf</strong></h2>
<hr class="border-t border-gray-600 my-4" />  

<br><br>
<div class="chart-wrapper">
  <canvas bind:this={canvas}></canvas>
</div>

