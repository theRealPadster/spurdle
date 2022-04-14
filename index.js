var spurdle=(()=>{var e,a=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,t=(e=>"undefined"!=typeof require?require:"undefined"!=typeof Proxy?new Proxy(e,{get:(e,t)=>("undefined"!=typeof require?require:e)[t]}):e)(function(e){if("react"===e)return Spicetify.React;if("react-dom"===e)return Spicetify.ReactDOM;if("undefined"!=typeof require)return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')}),u=(t,s,a,r)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let e of n(s))o.call(t,e)||e===a||l(t,e,{get:()=>s[e],enumerable:!(r=i(s,e))||r.enumerable});return t},s=(e,t,s)=>(s=null!=e?a(r(e)):{},u(!t&&e&&e.__esModule?s:l(s,"default",{value:e,enumerable:!0}),e)),c={},p=c,d={default:()=>function(){return b.default.createElement(h,null)}};for(e in d)l(p,e,{get:d[e],enumerable:!0});var m={container:"app-module__container___thHYo_spurdle",title:"app-module__title___jzQAy_spurdle",subtitle:"app-module__subtitle___eYtbK_spurdle",button:"app-module__button___c1Bae_spurdle",counter:"app-module__counter___ch4KT_spurdle",guessList:"app-module__guessList___F8WJL_spurdle"},y=s(t("react")),f=s(t("react")),g=e=>{var t=e.won&&e.index===e.guesses.length-1;return f.default.createElement("li",null,t?"✔":"x"," ",e.guesses[e.index])},_=e=>e.trim().replace(/[^a-zA-Z0-9]/g,"").toLowerCase(),h=class extends y.default.Component{constructor(e){super(e),this.state={stage:0,timeAllowed:1,guess:"",guesses:[],won:!1},this.playSegmentClick=()=>{{var e=this.state.timeAllowed;const a=1e3*e,r=Spicetify.Player.getDuration();if(!(a>r)){Spicetify.showNotification(`Playing from 0s to ${e}s`),Spicetify.Player.seek(0),Spicetify.Player.play();let s=0;const l=e=>{if(s)return console.log("debouncing"),void(500<e.timeStamp-s&&(s=0,console.log("reset debouncing")));var t=r*Spicetify.Player.getProgressPercent();console.log({currentProgress:t,endMilliseconds:a}),t>a&&(s=e.timeStamp,Spicetify.Player.pause(),console.log("stopping"),Spicetify.Player.removeEventListener("onprogress",l))};Spicetify.Player.addEventListener("onprogress",l)}return}},this.submitGuess=e=>{if(e.preventDefault(),0!==this.state.guess.trim().length){e=this.state.guess,console.log({guess:e}),console.log("title: "+Spicetify.Player.data.track.metadata.title),console.log("artist_name: "+Spicetify.Player.data.track.metadata.artist_name),console.log("album_artist_name: "+Spicetify.Player.data.track.metadata.album_artist_name);e=_(e)===_(Spicetify.Player.data.track.metadata.title);if(e){var t=!0;[document.querySelector(".main-nowPlayingWidget-nowPlaying"),document.querySelector(".player-controls__buttons")].forEach(e=>{e&&(e.style.opacity=t?"1":"0")});const s=document.querySelector(".playback-bar");s&&(s.style.pointerEvents=t?"auto":"none")}this.setState({guesses:[...this.state.guesses,this.state.guess],guess:"",stage:this.state.stage+1,timeAllowed:this.state.timeAllowed+1,won:e})}},this.guessChange=e=>this.setState({guess:e.target.value}),this.URIs=Spicetify.Platform.History.location.state.URIs}componentDidMount(){console.log("App mounted, URIs: ",this.URIs),this.URIs&&(Spicetify.Player.playUri(this.URIs[0]),Spicetify.Player.pause(),Spicetify.Player.seek(0))}render(){return y.default.createElement(y.default.Fragment,null,y.default.createElement("div",{className:m.container},y.default.createElement("h1",{className:m.title},"🎵 Spurdle!"),this.state.won?y.default.createElement("h2",{className:m.subtitle},"You won!"):null,y.default.createElement("ol",{className:m.guessList},this.state.guesses.map((e,t)=>y.default.createElement(g,{key:t,index:t,guesses:this.state.guesses,won:this.state.won}))),y.default.createElement("form",{id:"guessForm",onSubmit:this.submitGuess},y.default.createElement("input",{type:"text",className:m.input,placeholder:"Guess the song",value:this.state.guess,onChange:this.guessChange}),y.default.createElement("button",{type:"submit",className:m.button},"Guess")),y.default.createElement("button",{className:m.button,onClick:this.playSegmentClick},`Play ${this.state.timeAllowed}s`)))}},b=s(t("react"));return s=c,u(l({},"__esModule",{value:!0}),s)})();const render=()=>spurdle.default();