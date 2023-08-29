$(document).ready(function () {
  const $progressBar = $('.progressBar');
  const $progressValue = $('.progressValue');
  const $progressContainer = $('.progressContainer');
  let isDragging = false;

  let progress = 0;

  // Function to update the progress bar and value
  function updateProgress() {
    const percent = (progress / $progressContainer.width()) * 100;
    $progressBar.css('width', percent + '%');
    $progressValue.text(percent.toFixed(2) + '%');
  }

  // Mouse down event
  $progressBar.mousedown(function () {
    isDragging = true;

    // Mouse move event
    $(document).mousemove(function (e) {
      if (isDragging) {
        const newPosition = e.clientX - $progressBar.offset().left;
        if (newPosition >= 0 && newPosition <= $progressContainer.width()) {
          progress = newPosition;
          updateProgress();
        }
      }
    });

    // Mouse up event
    $(document).mouseup(function () {
      isDragging = false;
    });
  });

  // Initial progress update
  updateProgress();
});
//********************************************************************* */
$(document).ready(function () {
  const $progressBar = $('.progressBar');
  const $progressValue = $('.progressValue');
  const $progressContainer = $('.progressContainer');
  let isDragging = false;

  let progress = 0;

  // Function to update the progress bar and value
  function updateProgress() {
    const percent = Math.round((progress / $progressContainer.width()) * 100);
    $progressBar.css('width', percent + '%');
    $progressValue.text(percent + '%');
  }

  // Mouse down event
  $progressBar.mousedown(function () {
    isDragging = true;

    // Mouse move event
    $(document).mousemove(function (e) {
      if (isDragging) {
        const newPosition = e.clientX - $progressBar.offset().left;
        if (newPosition >= 0 && newPosition <= $progressContainer.width()) {
          progress = newPosition;
          updateProgress();
        }
      }
    });

    // Mouse up event
    $(document).mouseup(function () {
      isDragging = false;
    });
  });

  // Initial progress update
  updateProgress();
});
//**************************************************************************** */
$(document).ready(function () {
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
});
