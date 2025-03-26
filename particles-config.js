const particlesConfig = {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#836FFF"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.4
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 2
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#836FFF",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 250,
                "line_linked": {
                    "opacity": 1,
                    "color": "#836FFF"
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
};

// Initialize particles when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', particlesConfig);
}); 