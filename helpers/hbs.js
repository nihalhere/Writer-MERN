const moment = require("moment");

module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },
  editIcon: function (storyUser, loggedUser, storyId) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
    } else {
      return "";
    }
  },
  deleteIcon: function (storyUser, loggedUser, storyId) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      return `<form action="/stories/${storyId}" method="POST" id="delete-form">
     <input type="hidden" name="_method" value="DELETE" />
     <button type="submit" class="btn red">
       <i class="fas fa-trash red-text text-danger"></i>
     </button>
   </form>`;
    } else {
      return "";
    }
  },

  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp(">" + selected + "</option>"),
        ' selected="selected"$&'
      );
  },
};
