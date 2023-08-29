$(document).ready(function () {
  var htmlToAppend = `
      <div class="progressContainer">
          <div class="progressValue" id="progressValue">0%</div>
          <div class="progressBar" id="progressBar"></div>
      </div>
  `;

  $('#targetElement').append(htmlToAppend);
});
//***********************************************/

$(document).ready(function () {
  const targetElement = $(
    '.myControl .fixedTable table tbody tr:eq(0) td:eq(3) div'
  );
  targetElement.text('');
  targetElement.addClass('progressContainer');
  var progressBar = `     
          <div class="progressValue" id="progressValue">0%</div>
          <div class="progressBar" id="progressBar"></div>
      `;
  $(targetElement).append(progressBar);
});
//****************************************************************** */

function setProgressBar(controlID) {
  const targetElement = $(
    '#' + controlID + '.fixedTable table tbody tr:eq(0) td:eq(3) div'
  );
  targetElement.text('');
  targetElement.addClass('progressContainer');
  var progressBar = `     
          <div class="progressValue" id="progressValue">0%</div>
          <div class="progressBar" id="progressBar"></div>
      `;
  $(targetElement).append(progressBar);
}
/******************************************************** */
function setProgressBar(controlID) {
  const targetElements = $(
    '#' + controlID + '.fixedTable table tbody tr td:eq(3) div'
  );

  targetElements.each(function () {
    const targetElement = $(this);
    targetElement.text('');
    targetElement.addClass('progressContainer');
    var progressBar = `
      <div class="progressValue" id="progressValue">0%</div>
      <div class="progressBar" id="progressBar"></div>
    `;
    targetElement.append(progressBar);
  });
}
setProgressBar('myControl');
//********************************************************************* */
$(document).ready(function (controlID) {
  const targetElements = $(
    '#' + controlID + '.fixedTable table tbody tr td:eq(3) div'
  );
  debugger;
  targetElements.each(function () {
    const targetElement = $(this);
    targetElement.text('');
    targetElement.addClass('progressContainer');
    var progressBar = `
      <div class="progressValue" id="progressValue">0%</div>
      <div class="progressBar" id="progressBar"></div>
    `;
    targetElement.append(progressBar);
  });
});
//**************************************************************** */
$(document).ready(function () {
  const targetElements = $(
    '.myControl .fixedTable table tbody tr td:eq(3) div'
  );
  debugger;
  targetElements.each(function () {
    const targetElement = $(this);
    targetElement.text('');
    targetElement.addClass('progressContainer');
    var progressBar = `
      <div class="progressValue" id="progressValue">0%</div>
      <div class="progressBar" id="progressBar"></div>
    `;
    targetElement.append(progressBar);
  });
});
//************************************************ */
$(document).ready(function () {
  const targetElements = $('.myControl .fixedTable table tbody tr');
  debugger;
  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3) div');
    targetElement.text('');
    targetElement.addClass('progressContainer');
    var progressBar = `
      <div class="progressValue" id="progressValue">0%</div>
      <div class="progressBar" id="progressBar"></div>
    `;
    targetElement.append(progressBar);
  });
});
//worked...
/******************************************************* */
function setProgressBar(controlID) {
  const targetElements = $('#' + controlID + '.fixedTable table tbody tr');
  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3) div');
    targetElement.text('');
    targetElement.addClass('progressContainer');
    var progressBar = `
      <div class="progressValue" id="progressValue">0%</div>
      <div class="progressBar" id="progressBar"></div>
    `;
    targetElement.append(progressBar);
  });
}
setProgressBar('myControl');
//*********************************************************** */

$(document).ready(function () {
  const targetElements = $('.myControl .fixedTable table tbody tr');
  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    targetElement.find('div').remove();
    var progressBar = `
    <div class="progressContainer">
    <div class="progressValue" id="progressValue">0%</div>
    <div class="progressBar" id="progressBar"></div>
    </div>
    `;
    targetElement.append(progressBar);
  });
});
//********************************************************** */

function setProgressBar(controlID) {
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  debugger;
  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    targetElement.find('div').remove();
    var progressBar = `
    <div class="progressContainer">
      <div class="progressValue" id="progressValue">0%</div>
      <div class="progressBar" id="progressBar"></div>
    </div>
    `;

    targetElement.append(progressBar);
  });
}

//****************************************************************************/

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
          <div class="progressValue" id="progressValue">0%</div>
          <div class="progressBar" id="progressBar"></div>
        </div>
      `;
    targetElement.append(progressBar);
  });

  const $progressBars = $('.progressBar');
  const $progressValues = $('.progressValue');
  const $progressContainers = $('.progressContainer');
  let isDragging = false;

  // Initialize an array to store individual progress values
  const progressValues = new Array($progressBars.length).fill(0);

  // Function to update a specific progress bar and value
  function updateProgress(index) {
    const containerWidth = $progressContainers.eq(index).width();
    const percent = Math.round((progressValues[index] / containerWidth) * 100);
    $progressBars.eq(index).css('width', percent + '%');
    $progressValues.eq(index).text(percent + '%');
  }
  // Function to update a specific progress bar and value
  function updateProgress(index) {
    const containerWidth = $progressContainers.eq(index).width(); //
    const percent = (progressValues[index] / containerWidth) * 100;
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
          const containerWidth = $progressContainers.eq(currentIndex).width();
          if (newPosition >= 0 && newPosition <= containerWidth) {
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
