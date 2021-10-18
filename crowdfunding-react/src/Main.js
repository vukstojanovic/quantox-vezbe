
import logoMastercraft from './images/logo-mastercraft.svg';
import iconBookmark from './images/icon-bookmark.svg';

export default function Main() {

    return (
    <main>
    
        <section class="first">
          <div class="upper-img">
            <img src={logoMastercraft} alt="logoMastercraft"/>
          </div>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful a handcrafted monitor stand to reduce neck and eye strain.</p>
          <div class="buttons">
            <button class="back">Back this project</button>
            <div class="bookmark"><img src={iconBookmark} alt="bookmark"/><span>Bookmark</span></div>
          </div>
        </section>
    
        <section class="second">
          <article>
            <p class="nums">$89,914</p>
            <p class="description">of $100,000 backed</p>
          </article>
          <hr/>
          <article>
            <p class="nums"> 5,007</p>
            <p class="description">total backers</p>
          </article>
          <hr/>
          <article>
            <p class="nums">56</p>
            <p class="description">days left</p>
          </article>
          <div class="progress-bar">
            <div class="progress"></div>
          </div>
        </section>
    
        <section class="third">
          <h2>About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
    
          <aside class="product">
            <h3 class="black">Bamboo Stand</h3>
            <h3 class="green">Pledge $25 or more</h3>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
              you’ll be added to a special Backer member list.
            </p>
            <div class="how-many">
              <span class="big-letter">101</span>
              <span class="small-letter">left</span>
            </div>
            <button>Select Reward</button>
          </aside>
    
          <aside class="product">
            <h3 class="black">Black Edition Stand</h3>
            <h3 class="green">Pledge $75 or more</h3>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
              member list. Shipping is included.
            </p>
            <div class="how-many">
              <span class="big-letter">64</span>
              <span class="small-letter">left</span>
            </div>
            <button>Select Reward</button>
          </aside>
    
          <aside class="product">
            <h3 class="black">Mahogany Special Edition</h3>
            <h3 class="green">Pledge $200 or more</h3>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
              to our Backer member list. Shipping is included.
            </p>
            <div class="how-many">
              <span class="big-letter">0</span>
              <span class="small-letter">left</span>
            </div>
            <button>Out of stock</button>
          </aside>
        </section>
      </main>
    )

} 

















