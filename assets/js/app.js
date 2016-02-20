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

      init: function() {
        vm.toggleAvatarDropdown();
      }
    };

    var vm = _dashboard.viewModel();
    _dashboard.init();

})(jQuery);
