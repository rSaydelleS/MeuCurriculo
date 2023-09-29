import { useReducer } from 'react';
import './index.scss'

function reducer (state, action){
  switch(action.type){
    case'Hover':
    return {
      display: state.display == 'none' ? 'block' : 'none'}
  }
}

function Main() {
  
  const [state, dispatch] = useReducer(reducer, {
    display: "none"
  })

const showProject = () =>{
  dispatch({type: 'Hover'})
}
  return (
    <>
      <div className='main'>
        <div className='main__presentation'>
          <header>
            <h1>Olá eu sou Rafael Saydelles</h1>
            <h3>Programador Front-End</h3>
            <p>
              Sou estudadnte do curso Formação em Tecnologia na Escola DNC,
              comocei a estudar programação em janeiro desse ano -2023- e desde
              o inicio me interessei pelo Front-End pois ador criar sites de diversos
              tipos, visando sempre a experiência do usuário.
            </p>
          </header>
          <div>
            <img className='main__profile_photo' src='profile-photo.png'></img>
            <p>Redes sociais</p>
            <div className='main__profile_links'>
              <a href='https://www.instagram.com/0rafinhaa/' target='blank'><img src="instagram.png" alt="Instagram" /></a>
              <a href="https://www.linkedin.com/in/rafael-saydelles-53b433278/" target="blank" ><img src="linkedin.png" alt="linkedin" /></a>
              <a href="https://github.com/rSaydelleS" target="blank" ><img src="github.png" alt="Github" /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className='main__skills'>
          <section>
            <h1>Habilidades</h1>
            <div className='main__images'>
              <img src='HTML5.png'></img>
              <img src='CSS3.png'></img>
              <img src='sass.png'></img>
              <img src='js.png'></img>
              <img src='react.png'></img>
            </div>
          </section>
        </div>
        <hr />
          <h1 onMouseOver={showProject}>Ver Projetos Pessoais</h1>
        <div className='main__projects'>
          <div style={{display : state.display}}>
            <div className='main__description'>
              <div>
                <h2>Rick and<br />
                  Morty Status</h2>
              </div>
              <div>
                <img src="RickAndMorty.png" alt="projeto pessoal 1" />
                <p>
                  Lista de personagem com os seus dados e situação<br/>
                  atual no seriado animado e algumas informações básicas.
                </p>
                <a href='https://github.com/rSaydelleS/rickandmortystatus' target='blank'><button>Ir para o repositório!</button></a>
                <a href='https://github.com/rSaydelleS/TodoList-DNC' target='blank'><button>Ir para o site!</button></a>
              </div>
            </div>
          </div>
          <div style={{display : state.display}}>
            <div className='main__description'>
              <div>
                <h2>ToDo List</h2>
              </div>
              <div>
                <img src="todolist.png" alt="projeto pessoal 2" />
                <p>
                  Lista para organizar melhor o dia para saber quais<br/>
                  tarefas devem ser feitas. Trabalho da DNC.
                </p>
                <a href='https://github.com/rSaydelleS/TodoList-DNC' target='blank'><button>Ir para o repositório!</button></a>
                <a href='https://cozy-toffee-e5705a.netlify.app' target='blank'><button>Ir para o site!</button></a>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
