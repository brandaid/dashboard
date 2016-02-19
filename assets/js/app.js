(function($) {
    var _dashboard = {
      viewModel: function() {
        return this;
      },

      switch: function() {
        $(".custom-switch").each(function(i) {
          var classes = $(this).attr("class"),
              id      = $(this).attr("id"),
              name    = $(this).attr("name");

          $(this).wrap('<div class="custom-switch" id="' + name + '"></div>');
        	$(this).after('<label for="custom-switch-' + i + '"></label>');
          $(this).attr("id", "custom-switch-" + i);
          $(this).attr("name", name);
        });
      },

      init: function() {
        //vm.switch();
      }
    };

    var vm = _dashboard.viewModel();
    _dashboard.init();

})(jQuery);
