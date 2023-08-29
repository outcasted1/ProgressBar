function setProgressBar(controlID) {
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3) '
  );
  var targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    targetElement.find('div').remove();
    var progressBar = `
    <div class="progressContainer" style="width:${targetHeaderWidth}px;">
    <div class="barWidth">
        <div class="progressBar" id="progressBar"></div>
    </div>
    <div class="progressValue" id="progressValue">0%</div>
    </div>
      `;
    targetElement.append(progressBar);
  });
  var barWidth = targetHeaderWidth - 40;
  $('.barWidth').width(barWidth);

  const $progressBars = $('.progressBar');
  const $progressValues = $('.progressValue');
  const $progressContainers = $('.progressContainer');
  const bar = $('.barWidth');
  let isDragging = false;

  // Initialize an array to store individual progress values
  const progressValues = new Array($progressBars.length).fill(0);

  // Function to update a specific progress bar and value
  function updateProgress(index) {
    const progressBarWidth = bar.eq(index).width();
    const percent = (progressValues[index] / progressBarWidth) * 100;
    const limitedPercent = Math.min(100, Math.max(0, percent)); // Limit percent between 0 and 100
    $progressBars.eq(index).css('width', limitedPercent + '%');
    $progressValues.eq(index).text(Math.round(limitedPercent) + '%');
  }

  // Mouse down event for each progress bar
  $progressBars.each(function (index) {
    $(this).mousedown(function () {
      isDragging = true;
      const currentIndex = index;

      // Mouse move event
      $(document).mousemove(function (event) {
        if (isDragging) {
          const newPosition =
            event.clientX - $progressBars.eq(currentIndex).offset().left;
          const progressBarWidth = bar.eq(currentIndex).width();
          if (newPosition >= 0 && newPosition <= progressBarWidth) {
            progressValues[currentIndex] = newPosition;
            updateProgress(currentIndex);
          }
        }
      });

      // Mouse up event
      $(document).mouseup(function () {
        isDragging = false;
        $(document).off('mousemove');
        $(document).off('mouseup');
      });
    });
  });

  // Initial progress update for all progress bars
  $progressBars.each(function (index) {
    updateProgress(index);
  });
}
