(function () {
  var ARTIFACTS = [];

  var typeLabels = {
    object: 'Object', spatial: 'Spatial', digital: 'Digital',
    performance: 'Performance', protocol: 'Protocol',
    interface: 'Interface', documentation: 'Documentation',
    environmental: 'Environmental',
  };

  var entityLabels = {
    'Artifice NYC': 'IRL',
    'Studio Artifice': 'URL',
    'Both': 'IRL+URL',
  };

  var currentQuery = '';
  var $grid = document.getElementById('artifact-grid');
  var $count = document.getElementById('grid-count');
  var $empty = document.getElementById('empty-state');
  var $search = document.getElementById('search-input');

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function modeClass(mode) {
    if (mode === 'WHITEBOX') return 'tag--wb';
    if (mode === 'BLACKBOX') return 'tag--bb';
    return 'tag--both';
  }

  function modeIcons(mode) {
    if (mode === 'WHITEBOX') return '<img src="wb-icon.png" class="mode-icon" alt="WHITEBOX">';
    if (mode === 'BLACKBOX') return '<img src="bb-icon.png" class="mode-icon" alt="BLACKBOX">';
    return '<span class="mode-icons-stack"><img src="wb-icon.png" class="mode-icon" alt="WHITEBOX"><img src="bb-icon.png" class="mode-icon" alt="BLACKBOX"></span>';
  }

  function overlayIcon(mode) {
    if (mode === 'WHITEBOX') return '<img src="wb-overlay.png" class="overlay-icon" alt="WHITEBOX">';
    if (mode === 'BLACKBOX') return '<img src="bb-overlay.png" class="overlay-icon" alt="BLACKBOX">';
    return '<span class="mode-icons-stack"><img src="wb-overlay.png" class="overlay-icon" alt="WHITEBOX"><img src="bb-overlay.png" class="overlay-icon" alt="BLACKBOX"></span>';
  }

  function getFiltered() {
    if (!currentQuery.trim()) return ARTIFACTS;
    var q = currentQuery.toLowerCase();
    return ARTIFACTS.filter(function (a) {
      return [a.title, a.type, a.mode, a.entity].join(' ').toLowerCase().indexOf(q) !== -1;
    });
  }

  function render() {
    var list = getFiltered();
    var total = list.length;
    $grid.innerHTML = '';
    $count.textContent = total + ' artifact' + (total !== 1 ? 's' : '');
    $empty.hidden = total > 0;

    list.forEach(function (a) {
      var li = document.createElement('li');
      li.className = 'card';
      var typeLabel = typeLabels[a.type] || a.type;
      var entityLabel = entityLabels[a.entity] || a.entity;
      li.innerHTML =
        '<div class="card-link">' +
          '<div class="card-img-wrap">' +
            '<img class="card-img" src="' + esc(a.thumb) + '" alt="' + esc(a.title) + '" loading="lazy">' +
            '<div class="card-overlay">' +
              overlayIcon(a.mode) +
            '</div>' +
          '</div>' +
          '<div class="card-body">' +
            '<span class="card-code">' + esc(a.code) + '</span>' +
            '<div class="card-title">' + esc(a.title) + '</div>' +
            '<div class="card-meta">' + modeIcons(a.mode) + ' <span class="card-meta-text">' + esc(typeLabel) + ' · ' + esc(entityLabel) + '</span></div>' +
          '</div>' +
        '</div>';
      $grid.appendChild(li);
    });
  }

  $search.addEventListener('input', function () {
    currentQuery = $search.value;
    render();
  });

  // View toggle
  var $viewGrid = document.getElementById('view-grid');
  var $viewList = document.getElementById('view-list');
  $viewGrid.addEventListener('click', function () {
    $grid.classList.remove('grid--list');
    $viewGrid.classList.add('view-btn--active');
    $viewList.classList.remove('view-btn--active');
  });
  $viewList.addEventListener('click', function () {
    $grid.classList.add('grid--list');
    $viewList.classList.add('view-btn--active');
    $viewGrid.classList.remove('view-btn--active');
  });


  render();
})();
