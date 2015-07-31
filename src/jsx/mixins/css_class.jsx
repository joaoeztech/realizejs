var CssClassMixin = {
  getDefaultProps: function() {
    return {
      clearTheme: false,
      className: ''
    };
  },

  className: function() {
    var className = '';
    if(!this.props.clearTheme && !!this.state.themeClassKey) {
      className += WRF.themeClass(this.state.themeClassKey) + ' ';
    }

    className += this.props.className;
    return className;
  }
};