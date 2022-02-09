AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      pumpkinPie: {
        banner_url: "./assets/posters/pumpkin-pie-posterjpg.jpg",
        title: "Pumpkin Pie",
        cuisine_type: "American Cuisine",
        description:
          "Pumpkin pie is a dessert pie with a spiced, pumpkin-based custard filling, though other types of squash are more commonly utilized. The pumpkin is a symbol of harvest time, and pumpkin pie is generally eaten during the fall and early winter. In the United States and Canada, it is usually prepared for Thanksgiving, and other occasions when pumpkin is in season.",
      },
      pizza: {
        banner_url: "./assets/posters/pizza-poster.png",
        title: "Pizza",
        cuisine_type: "Italian Cuisine",
        description:
          "Pizza is an dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.",
      },
      ratatouille: {
        banner_url: "./assets/posters/ratatouille-banner.jpg",
        title: "Ratatouille",
        cuisine_type: "French Cuisine",
        description:
          "Ratatouille originated from Nice, France, in the 18th Century. This dish can be made in many different ways, but uses the same ingredients in each. 'https://tasty.co/recipe/ratatouille'",
      },
      squirrelfish: {
        banner_url: "./assets/posters/squirrel-fish-banner.jpg",
        title: "Squirrel Fish",
        cuisine_type: "Chinese Cuisine",
        description:
          "Squirrel Fish origniated from Suzhou, China in the Jiangsu Province. This cuisine is prepared by deboning and cutting the fish in an ornamental form. It is then deep-fried in batter, and has sweet and sour sauce poured over it. 'https://www.youtube.com/watch?v=2aqTiQ8dY6k'",
      },
    };
    const { itemId } = this.data;
    console.log(itemId, "-----------");
    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.cuisine_type})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
