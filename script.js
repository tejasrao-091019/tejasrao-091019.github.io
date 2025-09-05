// // Get the current point in time
// const timestamp = new Date();

// // advance by 24 hours, to get to tomorrow
// timestamp.setTime(timestamp.getTime() + (24 * 60 * 60 * 1000));

// // format and output the result
// const locale = undefined; // use the user's current locale (language/region)
// document.getElementById("spanDate").innerHTML = timestamp.toLocaleString(locale, {
//   timeZone: 'America/Chicago', // use the US Central Time Zone
//   year: 'numeric', // include the year as a number
//   month: 'long',   // include the month as the long name
//   day: 'numeric'   // include the day as a number
// });
// //^^^^ above code is old

// //<script>
//         function updateTime() {
//             const date = new Date();
//             const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//             const time = date.toLocaleTimeString();
//             const day = date.toLocaleDateString(undefined, options);
//             document.getElementById('time').innerHTML =
//                 ` ${day},  ${time}`;
//         }

//         setInterval(updateTime, 100);
//         updateTime();
//     //</script>

//^^^^above(2nd) code is latest one, with script tags being used for javascript code in HTML


//below code is for navbar hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-buttons");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))




//below code is for achievements img slider
    const sliders = document.querySelectorAll('.slider'); // Select all slider containers

    sliders.forEach(slider => {
        const list = slider.querySelector('.list');
        const items = list.querySelectorAll('.item');
        const prevButton = slider.querySelector('.buttons .prev');
        const nextButton = slider.querySelector('.buttons .next');
        const dotsContainer = slider.querySelector('.dots');
        let dots = [];
        const lengthItems = items.length;
        let active = 0;
        let refreshInterval;

        // Function to update the slider position and active dot (scoped to this slider)
        function reloadSlider() {
            list.style.left = -items[active].offsetLeft + 'px';

            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === active) {
                    dot.classList.add('active');
                }
            });
        }

        // Next button functionality (scoped to this slider)
        function nextSlide() {
            active = (active + 1) % lengthItems;
            reloadSlider();
            resetInterval();
        }
        if (nextButton) {
            nextButton.onclick = nextSlide;
        }

        // Previous button functionality (scoped to this slider)
        function prevSlide() {
            active = (active - 1 + lengthItems) % lengthItems;
            reloadSlider();
            resetInterval();
        }
        if (prevButton) {
            prevButton.onclick = prevSlide;
        }

        // Function to reset the automatic slideshow interval (scoped to this slider)
        function resetInterval() {
            clearInterval(refreshInterval);
            refreshInterval = setInterval(nextSlide, 3000);
        }

        // Initialize dots dynamically (scoped to this slider)
        function initializeDots() {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < lengthItems; i++) {
                const li = document.createElement('li');
                if (i === 0) {
                    li.classList.add('active');
                }
                li.addEventListener('click', () => {
                    active = i;
                    reloadSlider();
                    resetInterval();
                });
                dotsContainer.appendChild(li);
                dots.push(li);
            }
        }

        // Initialize this slider
        function initializeSlider() {
            if (items.length > 0) {
                initializeDots();
                reloadSlider();
                resetInterval();
            }
        }

        initializeSlider();
    });

    window.onresize = function(event) {
        sliders.forEach(slider => {
            const list = slider.querySelector('.list');
            const items = list.querySelectorAll('.item');
            if (items.length > 0) {
                const active = parseInt(list.style.left) / -items[0].offsetWidth || 0; // Try to get current active index
                list.style.left = -items[active].offsetLeft + 'px';
            }
        });
    };

    // below code is for achievements-img-caption (remains the same as it targets a different class)
    // document.addEventListener('DOMContentLoaded', function() {
        const imageContainers = document.querySelectorAll('.achievement-images-container');
        imageContainers.forEach(container => {
            const img = container.querySelector('.achievement-images');
            const text = container.querySelector('.achievements-img-caption');
            if (img && text) {
                img.onload = function() {
                    const imageRenderedWidth = img.offsetWidth;
                    text.style.maxWidth = `${imageRenderedWidth - 60}px`;
                };
                if (img.complete) {
                    const imageRenderedWidth = img.offsetWidth;
                    text.style.maxWidth = `${imageRenderedWidth - 60}px`;
                }
            }
        });
    // });

    
    // const sliderContainer = document.querySelector('.slider-container');
    // const slider = document.querySelector('.slider2');
    // const slides = document.querySelectorAll('.slide');
    // const prevBtn = document.querySelector('.prev-btn');
    // const nextBtn = document.querySelector('.next-btn');

    // const visibleCount = 3;
    // let currentIndex = 0;
    // let slideWidth;

    // function updateSlider() {
    //     if (!sliderContainer) {
    //         console.error("Error: .slider-container element not found.");
    //         return;
    //     }
    //     slideWidth = sliderContainer.offsetWidth / visibleCount;
    //     slides.forEach(slide => {
    //         slide.style.width = `${slideWidth}px`;
    //     });
    //     slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    //     if (prevBtn) {
    //         prevBtn.disabled = currentIndex === 0;
    //     }
    //     if (nextBtn) {
    //         nextBtn.disabled = currentIndex >= slides.length - visibleCount;
    //     }
    // }

    // function nextSlide() {
    //     if (currentIndex < slides.length - visibleCount) {
    //         currentIndex++;
    //         updateSlider();
    //     }
    // }

    // function prevSlide() {
    //     if (currentIndex > 0) {
    //         currentIndex--;
    //         updateSlider();
    //     }
    // }

    // if (sliderContainer) {
    //     updateSlider();
    //     window.addEventListener('resize', updateSlider);

    //     if (nextBtn) {
    //         nextBtn.addEventListener('click', nextSlide);
    //     } else {
    //         console.error("Error: .next-btn element not found.");
    //     }

    //     if (prevBtn) {
    //         prevBtn.addEventListener('click', prevSlide);
    //     } else {
    //         console.error("Error: .prev-btn element not found.");
    //     }

    //     let touchStartX = null;
    //     sliderContainer.addEventListener('touchstart', (e) => {
    //         touchStartX = e.touches[0].clientX;
    //     });

    //     sliderContainer.addEventListener('touchend', (e) => {
    //         if (touchStartX === null) return;
    //         const touchEndX = e.changedTouches[0].clientX;
    //         const diffX = touchStartX - touchEndX;

    //         if (diffX > 50) {
    //             nextSlide();
    //         } else if (diffX < -50) {
    //             prevSlide();
    //         }
    //         touchStartX = null;
    //     });
    // }

    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    const visibleCount = 3;
    let currentIndex = 0;
    let slideWidth;
    
    if (sliderContainer) {
        function updateSlider() {
          slideWidth = sliderContainer.offsetWidth / visibleCount;
          slides.forEach(slide => {
            slide.style.width = `${slideWidth}px`;
          });
    
          slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex >= slides.length - visibleCount;
        }
    
        function nextSlide() {
          if (currentIndex < slides.length - visibleCount) {
            currentIndex++;
            updateSlider();
          }
        }
    
        function prevSlide() {
          if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
          }
        }
    
        // Touch support
        let touchStartX = null;
        sliderContainer.addEventListener('touchstart', (e) => {
          touchStartX = e.touches[0].clientX;
        });
    
        sliderContainer.addEventListener('touchend', (e) => {
          if (touchStartX === null) return;
          const touchEndX = e.changedTouches[0].clientX;
          const diffX = touchStartX - touchEndX;
    
          if (diffX > 50) {
            nextSlide();
          } else if (diffX < -50) {
            prevSlide();
          }
    
          touchStartX = null;
        });
    
        window.addEventListener('resize', updateSlider);
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    
        // Initialize
        updateSlider();
    }
    
    
    
    
    
    

  const containers = document.querySelectorAll('.faq-container');

containers.forEach(container => {
  const toggleBtn = container.querySelector('.faq-toggle');
  const content = container.querySelector('.content-wrapper');
  const arrow = container.querySelector('.arrow');

  toggleBtn.addEventListener('click', () => {
    const isOpen = content.classList.contains('open');

    // Close all others
    containers.forEach(c => {
      c.querySelector('.content-wrapper').classList.remove('open');
      c.querySelector('.arrow').classList.remove('rotate');
    });

    // If this one was not open → open it
    if (!isOpen) {
      content.classList.add('open');
      arrow.classList.add('rotate');
    }
    // If it was open → leave it closed (all collapsed)
  });
});

 //faq style achievement section logic ends here


//below is the function to adjust captions width in achievements.html to 92% of the slider(or photo) width
(function () {
  const containers = document.querySelectorAll('.achievement-images-container');

  function setCaptionWidth(refEl, caption) {
    const w = refEl ? refEl.clientWidth : 0;
    if (!w) return;
    caption.style.width = (w * 0.95) + 'px';
    caption.style.marginLeft = 'auto';
    caption.style.marginRight = 'auto';
  }

  const ro = ('ResizeObserver' in window)
    ? new ResizeObserver(entries => {
        for (const entry of entries) {
          const refEl = entry.target;
          const container = refEl.closest('.achievement-images-container, .achievements-images-container');
          if (!container) continue;
          const caption = container.querySelector('.achievements-img-caption');
          if (!caption) continue;
          setCaptionWidth(refEl, caption);
        }
      })
    : null;

  containers.forEach(container => {
    let refEl = container.querySelector('.slider');
    if (!refEl) {
      // fallback: use first image
      refEl = container.querySelector('img');
    }
    const caption = container.querySelector('.achievements-img-caption');
    if (!refEl || !caption) return;

    setCaptionWidth(refEl, caption);

    if (ro) {
      ro.observe(refEl);
    } else {
      window.addEventListener('resize', () => setCaptionWidth(refEl, caption));
    }
  });

  window.addEventListener('load', () => {
    containers.forEach(container => {
      let refEl = container.querySelector('.slider') || container.querySelector('img');
      const caption = container.querySelector('.achievements-img-caption');
      if (refEl && caption) setCaptionWidth(refEl, caption);
    });
  });
})();
 //.achievements-img-caption width program ends here







});
