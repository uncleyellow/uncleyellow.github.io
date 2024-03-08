  // JavaScript code here

        // Function to generate a random number between min and max
        function random(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Function to create a rose petal element
      function createRosePetal() {
          const rosePetal = document.createElement('div');
          rosePetal.classList.add('rose-petal');

          // Set initial position at a random location at the top of the page
          const initialX = random(0, window.innerWidth);
          const initialY = -20;
          rosePetal.style.left = initialX + 'px';
          rosePetal.style.top = initialY + 'px';

          // Set random rotation angle
          const rotation = random(-45, 45);
          rosePetal.style.transform = 'rotate(' + rotation + 'deg)';

          // Append the rose petal element to the body
          document.body.appendChild(rosePetal);

          // Animate the rose petal falling to the bottom of the page
          const duration = random(11000, 15000);
          const finalY = window.innerHeight + 4600;
          
          const startTime = Date.now();
          const animateRosePetal = () => {
              const elapsedTime = Date.now() - startTime;
              const progress = elapsedTime / duration;

              if (progress >= 1) {
                  rosePetal.style.top = finalY + 'px';
                  setTimeout(() => {
                      rosePetal.remove();
                  }, 1000);
              } else {
                  const currentY = initialY + (finalY - initialY) * progress;
                  rosePetal.style.top = currentY + 'px';
                  requestAnimationFrame(animateRosePetal);
              }
          };
          animateRosePetal();
      }

      // Create rose petals at regular intervals
      setInterval(createRosePetal, 500);