require("./db/connection");
const { add } = require("./utils/add");
const yargs = require("yargs");
const { list } = require("./utils/list");
const { update } = require("./utils/update");
const { remove } = require("./utils/delete");
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput = yargs.argv.actor;
const watchedInput = yargs.argv.watched;
const updateTitle = yargs.argv.updateTitle
const ratingInput = yargs.argv.rating

const app = () => {
  if (command === "add") {
    if (actorInput) {
      add({ title: titleInput, actor: actorInput });
    } else {
      add({ title: titleInput });
    }
  } else if (command === "list") {
      list(titleInput,ratingInput)
    //list function
  } else if (command === "update") {
    update(titleInput ,{ updateTitle : updateTitle, actor: actorInput, watched: watchedInput, rating: ratingInput});

    //update function
  } else if (command === "remove"){
    remove(titleInput)
  }
};

app();
