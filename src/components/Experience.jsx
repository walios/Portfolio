import 'bootstrap/dist/css/bootstrap.min.css';
function Experience() {

  return (
    <section style={{ padding: '10vh 20vh 10vh 20vh', textAlign: 'left' }}>
      <div class="shadow p-3 mb-3 bg-white rounded card" >
        <div class="p-card-body">
          <div class="p-card-title" style={{fontSize: '1.5rem',fontWeight: '700',marginBottom: '0.5rem'}}>
          Origami Bird Studio
          </div>
          <div class="p-card-subtitle">
          Mobile Developer
          </div>
          <div class="p-card-content">
            <div>
              <h5>
                <br/>
                Technologies :
              </h5>
              <ul>
                <li>
                  Java</li>
                <li>Mysql</li>
              </ul>
            </div>
          </div>
          <div class="p-card-footer">
          April 2021 </div>
        </div>
      </div>

      <div class="shadow p-3 mb-3 bg-white rounded card" >
        <div class="p-card-body">
          <div class="p-card-title" style={{fontSize: '1.5rem',fontWeight: '700',marginBottom: '0.5rem'}}>
          Maroc Web Solutions Marrakech
          </div>
          <div class="p-card-subtitle">
            Web Developer
          </div>
          <div class="p-card-content">
            <div>
              <h5>
                <br/>
                Technologies :
              </h5>
              <ul>
                <li>
                  Wordpress</li>
                <li>Elementor</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
          <div class="p-card-footer">
          July - August 2022</div>
        </div>
      </div>
    </section>
  )
}
export default Experience;