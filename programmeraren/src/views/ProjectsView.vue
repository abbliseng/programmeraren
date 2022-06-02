<template>
  <div id="head" class="row no-gutters justify-content-center">
    <b-button class="col-5" style="margin-top:15px" @click="loadChapters()">Load chapters</b-button>
    <b-card class="col-8 row justify-content-center" title="Test projekt" style="margin-top: 15px">
      <b-card-text class="col-8">
        Vestibulum urna turpis, elementum quis euismod at, hendrerit in erat.
        Sed pretium hendrerit lacus. Donec id eros leo. Maecenas ultricies at
        nulla et iaculis. Vestibulum pulvinar quis tortor ut malesuada. Proin
        aliquet luctus eleifend. Praesent eget pellentesque odio. Pellentesque
        finibus eros id quam cursus ultrices nec ut magna. Cras dolor enim,
        aliquam a justo sed, molestie tempor ligula. Cras ut mauris vitae enim
        varius lobortis. Suspendisse ornare facilisis augue, a feugiat nunc
        auctor vitae. Nulla vitae dolor sit amet nibh aliquam tincidunt. Aliquam
        quam sem, lobortis non bibendum in, tempor non risus.
      </b-card-text>
      <b-img thumbnail fluid src="https://picsum.photos/1920/350" alt="Image 1"></b-img>
      <b-card-text class="col-10">
        Quisque feugiat facilisis risus, vel finibus velit egestas sed.
        Suspendisse lacinia tortor tempus nunc molestie, sit amet gravida odio
        ultricies. In sodales finibus mi, ac sodales arcu ultrices a. Curabitur
        justo augue, placerat sodales nisi ut, vestibulum mattis nunc. Duis
        commodo urna mauris, vitae finibus ipsum suscipit vel. Ut at tincidunt
        lacus, quis lacinia augue. Sed et sem diam. Nunc dignissim dolor quis
        convallis auctor. Vestibulum iaculis feugiat ex at facilisis. Fusce non
        sagittis lectus, non finibus tellus. Pellentesque pretium fermentum
        odio.
      </b-card-text>
      <b-img src="https://picsum.photos/600/400" fluid thumbnail alt="Responsive image"></b-img>
      <b-card-text class="col-11">
        Donec interdum id erat eu imperdiet. Sed molestie urna laoreet lacus
        fermentum tincidunt. Sed elementum lectus vel ligula tincidunt, in
        auctor lectus consequat. Maecenas ultrices pulvinar vulputate. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce condimentum mattis sem, sit amet convallis ex
        tristique in. Cras auctor dignissim ligula quis consequat. Donec non
        neque eleifend, condimentum dui id, ullamcorper magna. Donec consequat
        lorem sit amet arcu tristique, at tincidunt tellus mollis. Phasellus
        egestas quis nulla congue congue. Mauris aliquam pulvinar felis, at
        accumsan turpis dignissim vel. Cras rhoncus et ex eget vulputate.
      </b-card-text>
      <b-card-text class="col-12">
        Nunc maximus semper ante vel consectetur. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum eget sapien faucibus, bibendum velit vel, maximus leo.
        Suspendisse non sollicitudin mi. Maecenas id vestibulum dui, et finibus
        turpis. Donec sit amet sem eu nulla tincidunt pulvinar. Fusce luctus
        sodales sapien, ut posuere dui scelerisque a. Fusce sem massa, facilisis
        ac semper aliquet, pellentesque sed arcu. Proin nisl libero, elementum
        id euismod id, rhoncus vitae felis. Sed a aliquet orci.
      </b-card-text>
      <b-card-text class="col-12">
        Sed tristique pharetra fermentum. Quisque vitae interdum enim. Ut eu
        congue nulla. Aenean dui elit, varius sed purus id, elementum commodo
        nibh. Fusce diam ligula, bibendum ac accumsan at, blandit ac enim. Cras
        orci risus, pellentesque eu mi vitae, vehicula maximus lacus.
        Pellentesque feugiat suscipit est, nec sollicitudin augue sollicitudin
        et. Quisque auctor mollis mollis. Curabitur tristique in metus sit amet
        molestie. Mauris ac ligula eget libero hendrerit volutpat. Donec rutrum
        pretium arcu eu hendrerit. Sed vulputate sodales eleifend. Proin non
        neque ut sem maximus elementum ut non leo.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loadChapters() {
      let parent = document.getElementById("head")
      this.$db.collection("projects")
        .get()
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            console.log(doc.data())
            // console.log("Creating card...")
            let card = document.createElement("div")
            // console.log(card)
            // // card.title = doc.id
            card.setAttribute("class", "card col-8 row justify-content-center")
            // card.setAttribute("title", doc.id)
            card.setAttribute("style", "margin-top: 15px")

            let card_body = document.createElement("div")
            card_body.setAttribute("class", "card-body")

            let title = document.createElement("h4")
            title.setAttribute("class", "card-title")
            title.innerHTML = doc.id
            card_body.appendChild(title)

            let text = document.createElement("b-card-text")
            text.setAttribute("class", "col-8")
            text.innerHTML = "Vestibulum urna turpis, elementum quis euismod at, hendrerit in erat. Sed pretium hendrerit lacus. Donec id eros leo. Maecenas ultricies at nulla et iaculis. Vestibulum pulvinar quis tortor ut malesuada. Proin aliquet luctus eleifend. Praesent eget pellentesque odio. Pellentesque finibus eros id quam cursus ultrices nec ut magna. Cras dolor enim, aliquam a justo sed, molestie tempor ligula. Cras ut mauris vitae enim varius lobortis. Suspendisse ornare facilisis augue, a feugiat nunc auctor vitae. Nulla vitae dolor sit amet nibh aliquam tincidunt. Aliquam quam sem, lobortis non bibendum in, tempor non risus."
            card_body.appendChild(text)

            card.appendChild(card_body)

            parent.appendChild(card)
            console.log(parent)
          })
        })
      // let child = document.createElement("span")
      // child.innerHTML = "wow"
      // parent.appendChild(child)
    }
  }
};
</script>