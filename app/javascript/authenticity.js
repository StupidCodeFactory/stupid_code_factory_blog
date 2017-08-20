export default {

  authenticityToken() {
    const token = document.querySelector('meta[name="csrf-token"]');
    if (token && (token instanceof window.HTMLMetaElement)) {
      return token.content;
    }
    return null;
  },

  authenticityHeaders(otherHeaders) {
    return Object.assign(otherHeaders, {
      'X-CSRF-Token': this.authenticityToken(),
      'X-Requested-With': 'XMLHttpRequest',
    });
  },
};
