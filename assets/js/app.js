(function($) {
    $(document).foundation();

    var _dashboard = {
      viewModel: function() {
        return this;
      },

      toggleSubNav: function() {
        $('.vertical-menu li.parent > a').click(function(e) {
          e.preventDefault();
          $(this)
            .parent('li')
            .toggleClass('active')
            .find('ul').slideToggle(500);
        });
      },

      toggleAvatarDropdown: function() {
        $('.avatar-dropdown .toggle').click(function() {
          $(this).parent().find('ul').fadeToggle();
        });
      },

      initDatepicker: function() {
        $('input.datepicker').pickadate();
      },

      setCellHeights: function (original, copy) {

        var tr = original.find('tr'),
            tr_copy = copy.find('tr'),
            td = copy.find('td'),
            heights = [];

        tr.each(function (index) {
          var self = $(this),
              tx = self.find('td'); //omit TH in my case, you can put it back.
          tx.each(function (index2) { // Access to this index
              var height = $(this).outerHeight(true);
              heights[index] = heights[index] || 0;
              if (height > heights[index])
                  heights[index] = height;

              if (index2 > 0 && $(this).height() < height) // New line
                  $(this).attr("style","height:"+heights[1]+"px");
          });

        });

        tr_copy.each(function (index) {
          $(this).height(heights[index]);
        });
      },

      init: function() {
        vm.toggleSubNav();
        vm.toggleAvatarDropdown();
        vm.initDatepicker();
        //vm.toggleSubNav();
        vm.setCellHeights($('.tabled'), $('.tabled'));
      }
    };

    var vm = _dashboard.viewModel();
    _dashboard.init();

})(jQuery);
