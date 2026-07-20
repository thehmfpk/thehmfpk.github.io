(function(){
  var app = document.querySelector('.app');
  var toggle = document.getElementById('sidebarToggle');
  if(!app || !toggle) return;

  // Restore saved state so it persists across page navigations
  if(localStorage.getItem('sidebarCollapsed') === 'true'){
    app.classList.add('sidebar-collapsed');
  }

  toggle.addEventListener('click', function(){
    app.classList.toggle('sidebar-collapsed');
    localStorage.setItem('sidebarCollapsed', app.classList.contains('sidebar-collapsed'));
  });
})();
