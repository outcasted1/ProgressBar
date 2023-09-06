function setProgressBar(controlID) {
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3)'
  );
  var targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    targetElement.find('div').remove();
    var progressBar = `
                <div class="progressContainer" style="width:${targetHeaderWidth}px;">
                    <div class="progressValue" id="progressValue">0%</div>
                    <div class="barWidth">
                        <div class="progressBar" id="progressBar"></div>
                    </div>   
                </div>
      `;
    targetElement.append(progressBar);
  });

  var barWidth = targetHeaderWidth - 50;
  $('.barWidth').width(barWidth);
  const progressBars = $('.progressBar');
  const progressValue = $('.progressValue');
  const bar = $('.barWidth');
  let isDragging = false;
  const progressValues = new Array(progressBars.length).fill(0);
  function updateProgress(index) {
    const progressBarWidth = bar.eq(index).width();
    const percent = (progressValues[index] / progressBarWidth) * 100;
    const limitedPercent = Math.min(100, Math.max(0, percent));
    progressBars.eq(index).css('width', limitedPercent + '%');
    progressValue.eq(index).text(Math.round(limitedPercent) + '%');
  }
  progressBars.each(function (index) {
    $(this).mousedown(function () {
      isDragging = true;
      const currentIndex = index;
      $(document).mousemove(function (event) {
        if (isDragging) {
          const newPosition =
            event.clientX - progressBars.eq(currentIndex).offset().left;
          const progressBarWidth = bar.eq(currentIndex).width();
          if (newPosition >= 0 && newPosition <= progressBarWidth) {
            progressValues[currentIndex] = newPosition;
            updateProgress(currentIndex);
          }
        }
      });

      $(document).mouseup(function () {
        isDragging = false;
        $(document).off('mousemove');
        $(document).off('mouseup');
      });
    });
  });

  progressBars.each(function (index) {
    updateProgress(index);
  });
}
//********************************************** */
//updated Working
function setProgressBar(controlID) {
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3)'
  );
  const targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    let numerator = parseFloat($(this).find('td:eq(5)').text()); // Change const to let
    const denominator = parseFloat($(this).find('td:eq(2)').text());

    targetElement.find('div').remove();

    const progressBar = `
      <div class="progressContainer" style="width:${targetHeaderWidth}px;">
        <div class="progressValue" id="progressValue">0%</div>
        <div class="barWidth">
          <div class="progressBar" id="progressBar"></div>
        </div>   
      </div>
    `;

    targetElement.append(progressBar);

    const barWidth = targetHeaderWidth - 55;
    targetElement.find('.barWidth').width(barWidth);

    const progressBars = targetElement.find('.progressBar');
    const progressValue = targetElement.find('.progressValue');
    let isDragging = false;

    function updateProgress() {
      const percent = (numerator / denominator) * 100;
      const limitedPercent = Math.min(100, Math.max(0, percent));

      progressBars.css('width', limitedPercent + '%');
      progressValue.text(Math.round(limitedPercent) + '%');
    }

    progressBars.mousedown(function () {
      isDragging = true;

      $(document).mousemove(function (event) {
        if (isDragging) {
          const newPosition = event.clientX - progressBars.offset().left;
          const progressBarWidth = targetElement.find('.barWidth').width();

          if (newPosition >= 0 && newPosition <= progressBarWidth) {
            numerator = (newPosition / progressBarWidth) * denominator;
            updateProgress();
          }
        }
      });

      $(document).mouseup(function () {
        isDragging = false;
        $(document).off('mousemove');
        $(document).off('mouseup');
      });
    });

    updateProgress();
  });
}
