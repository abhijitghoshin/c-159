AFRAME.registerComponent("cursor-listner", {
schema:{
    selecteditemid:{
        default:"",type:'string'
    }
},
init:function(){
this.handlemouseenterevents()
this.handlemouseleaveevents()
this.handleclickevent()
},
handleplaceliststate:function(){
    const id=this.el.getAttribute("id")
    const placeid=["taj-mahal","budapest","new-york-city","eiffel-tower"]
    if(placeid.includes(id)){
        const placesContainer=document.querySelector("#places-container")
    placesContainer.setAttribute("cursor-listener",{selecteditemid:id})
    this.el.setAttribute("material",{color:"blue",opacity:1})
    }
},
handlemouseenterevents:function(){
    this.el.addEventListener("mouseenter",()=>{
        this.handleplaceliststate()

    })
},
handlemouseleaveevents:function(){
    this.el.addEventListener("mouseleave",()=>{
     const {selecteditemid}=this.data   
     if(selecteditemid){
         const el=document.querySelector(  `#${selecteditemid}`)
         const id=el.getAttribute("id")
         if (id==selecteditemid) {
          el.setAttribute("material",{color:"orange",capacity:1})  
         }
     }
    } )
},
handleclickevent:function(){
    this.el.addEventListener("click",evt=>{
        const placesContainer=document.querySelector("#places-container")
        const {state}=placesContainer.getAttribute("tour")
        if(state==="place-list"){
            const id=this.el.getAttribute("id")
            const placeid=["taj-mahal","budapest","new-york-city","eiffel-tower"]
            if(placeid.includes(id)){
                placesContainer.setAttribute("tour",
                {
                    state:"view",
                    selectedCard:id
                })
            }
        }
    })
}

})