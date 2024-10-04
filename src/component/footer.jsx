const Footer = () => {
    return (
<footer>
  <div class="container">
    <div class="row">

      <div class="col-md-3">
        <h4>About Us</h4>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Meet the Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press & Media</a></li>
        </ul>
      </div>

      <div class="col-md-3">
        <h4>Help & Support</h4>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="col-md-3">
        <h4>Stay Connected</h4>
        <ul>
          <li><a href="#">FaceBook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>

      <div class="col-md-3">
        <h4>Subscribe to our Newsletter</h4>
        <div class="subscribe-container">
  <input type="email" placeholder="Enter your email" />
  <button type="submit" class="subBtn">Subscribe</button>
</div>
      </div>

    </div>

    <div class="row copyright">
      <div class="col-12">
        <p>&copy; 2023 [Your Website Name]. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    );
  };

export default Footer;