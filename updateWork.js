function setProgressBar(controlID) {
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3)'
  );
  var targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    const numerator = $(this).find('td:eq(2)');
    const denominator = $(this).find('td:eq(2)');

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

  var barWidth = targetHeaderWidth - 55;
  $('.barWidth').width(barWidth);
  const progressBars = $('.progressBar');
  const progressValue = $('.progressValue');
  const bar = $('.barWidth');
  let isDragging = false;

  const progressValues = new Array(progressBars.length).fill(0);
  function updateProgress(index) {
    const percent = (numerator / denominator) * 100;
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
//***************************************************************************************/
function setProgressBar(controlID) {
  // Select the target elements and headers
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3)'
  );

  // Get the width of the target header
  const targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    // Select the target element, numerator, and denominator for each row
    const targetElement = $(this).find('td:eq(3)');
    // Remove existing progress bars
    targetElement.find('div').remove();
    // Create the progress bar HTML
    const progressBar = `
      <div class="progressContainer" style="width:${targetHeaderWidth}px;">
        <div class="progressValue" id="progressValue">0%</div>
        <div class="barWidth">
          <div class="progressBar" id="progressBar"></div>
        </div>   
      </div>
    `;

    // Append the progress bar to the target element
    targetElement.append(progressBar);
  });
  // Calculate the bar width
  const barWidth = targetHeaderWidth - 55;
  $('.barWidth').width(barWidth);

  // Select progress bars, progress values, and bars
  const progressBars = $('.progressBar');
  const progressValue = $('.progressValue');
  const bar = $('.barWidth');
  let isDragging = false;
  var numerator = $(this).find('td:eq(5)').text(); // Extract the text content
  var denominator = $(this).find('td:eq(2)').text(); // Extract the text content
  function updateProgress(index) {
    debugger;
    // Parse numerator and denominator as numbers
    const numeratorValue = parseFloat(numerator);
    const denominatorValue = parseFloat(denominator);

    // Calculate the percentage
    const percent = (numeratorValue / denominatorValue) * 100;
    const limitedPercent = Math.min(100, Math.max(0, percent));

    // Update the progress bar and progress value
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
            progressValue[currentIndex] = newPosition;
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
/*************************************************************************************/
//worked
function setProgressBar(controlID) {
  // Select the target elements and headers
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3)'
  );
  const targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    const numerator = parseFloat($(this).find('td:eq(5)').text()); // Extract the numerator value
    const denominator = parseFloat($(this).find('td:eq(2)').text()); // Extract the denominator value

    // Remove existing progress bars
    targetElement.find('div').remove();

    // Create the progress bar HTML
    const progressBar = `
      <div class="progressContainer" style="width:${targetHeaderWidth}px;">
        <div class="progressValue" id="progressValue">0%</div>
        <div class="barWidth">
          <div class="progressBar" id="progressBar"></div>
        </div>   
      </div>
    `;

    // Append the progress bar to the target element
    targetElement.append(progressBar);

    // Calculate the bar width for each row
    const barWidth = targetHeaderWidth - 55;
    targetElement.find('.barWidth').width(barWidth);

    // Select progress bars, progress values, and bars for each row
    const progressBars = targetElement.find('.progressBar');
    const progressValue = targetElement.find('.progressValue');
    let isDragging = false;

    function updateProgress() {
      // Calculate the percentage for the current row
      const percent = (numerator / denominator) * 100;
      const limitedPercent = Math.min(100, Math.max(0, percent));

      // Update the progress bar and progress value for the current row
      if (limitedPercent === 100) {
        // Apply specific CSS when the value is zero
        progressBars.css({
          width: '0%',
          'background-color': 'gray', // You can change this to the desired color
        });
        progressValue.text('0%');
      } else {
        // Apply normal CSS when the value is not zero
        progressBars.css('width', limitedPercent + '%');
        progressValue.text(Math.round(limitedPercent) + '%');
      }
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

    // Update progress for the current row
    updateProgress();
  });
}
/***************************************************************************************** */
//Worked
function setProgressBar(controlID) {
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find(
    '.fixedHead table tbody tr td:eq(3)'
  );

  const targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    const numerator = parseFloat($(this).find('td:eq(5)').text());
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

    function updateProgress(index) {
      const numeratorValue = parseFloat(numerator);
      const denominatorValue = parseFloat(denominator);

      const percent = (numeratorValue / denominatorValue) * 100;
      const limitedPercent = Math.min(100, Math.max(0, percent));

      progressBars.eq(index).css('width', limitedPercent + '%');
      progressValue.eq(index).text(Math.round(limitedPercent) + '%');
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
/********************************************************************************************* */
function setProgressBar(controlID) {
  
  const targetElements = $('#' + controlID).find('.fixedTable table tbody tr');
  const targetHeaders = $('#' + controlID).find('.fixedHead table tbody tr td:eq(3)');
  const targetHeaderWidth = targetHeaders.width();

  targetElements.each(function () {
    const targetElement = $(this).find('td:eq(3)');
    const numerator = parseFloat($(this).find('td:eq(5)').text()); 
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
          const newPosition =
            event.clientX - progressBars.offset().left;
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