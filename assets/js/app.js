(function($) {
    var _dashboard = {
      viewModel: function() {
        return this;
      },

      toggleAvatarDropdown: function() {
        $('.avatar-dropdown .toggle').click(function() {
          $(this).parent().find('ul').fadeToggle();
        });
      },

      initDatepicker: function() {
        $('.datepicker').pickadate();
      },

      init: function() {
        vm.toggleAvatarDropdown();
        vm.initDatepicker();
      }
    };

    var vm = _dashboard.viewModel();
    _dashboard.init();

})(jQuery);
