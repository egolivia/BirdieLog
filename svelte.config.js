import adapter from '@sveltejs/adapter-auto';

export default {
  compilerOptions: {
    runes: true
  },
  kit: {
    adapter: adapter()
  }
};
