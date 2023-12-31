import React,{useEffect} from 'react'
import './Timeline.css'

const Timeline = () => {

    useEffect(() => {
        var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

    })

  return (
    <div>
      <section class="timeline">
      <h1 class="timeline-heading">Timeline</h1>
<ul>
  <li>
    <div>
      <time>1687</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Laws of motion
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Newton</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1785</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Law of attraction
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Coulomb</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1827</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Law of Electric Resistance
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>G.S Ohm</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1831</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Electromagnetic Induction
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Michael Faraday</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1867</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Dynamite
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Alfred Nobel</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1895</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          X Rays
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Roentgen</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1897</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Electron
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>J.J.Thomson</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1898</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Radium
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Madam Curie</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1900</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Quantum Theory
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Max Plank</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1905</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Principle of Relativity
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Albert Einstein</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1905</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Photo electric effect
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Albert Einstein</span>
      </div>
    </div>
  </li>
  <li>
    <div>
      <time>1942</time>
      <div class="discovery">
        <h1>Discovery</h1>
        <p>
          Nuclear Reactor
        </p>
      </div>
      <div class="scientist">
        <h1>Scientist</h1>
        <span>Anrico Fermi</span>
      </div>
    </div>
  </li>
</ul>
</section>
    </div>
  )
}

export default Timeline
