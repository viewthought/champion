// Use this to customize the wymeditor boot process
// Just mirror the options specified in boot_wym.js with the new options here.
// This will completely override anything specified in boot_wym.js for that key.
// e.g. skin: 'something_else'
if (typeof(custom_wymeditor_boot_options) == "undefined") { custom_wymeditor_boot_options = {
    classesItems: [
      {name: 'text-align',
        rules:[
          {name: 'left', title: '{Left}'},
          {name: 'center', title: '{Center}'},
          {name: 'right', title: '{Right}'},
          {name: 'justify', title: '{Justify}'}
        ], join: '-', title: '{Text_Align}'},
      {name: 'image-align',
        rules:[
          {name: 'left', title: '{Left}'},
          {name: 'right', title: '{Right}'}
        ], join: '-', title: '{Image_Align}'},
      {name: 'font-size',
        rules:[
          {name: 'small', title: '{Small}'},
          {name: 'normal', title: '{Normal}'},
          {name: 'large', title: '{Large}'}
        ], join: '-', title: '{Font_Size}'},
      {name: 'photo',
        rules:[
          {name: 'polaroid', title: 'Polaroid'},
          {name: 'left-1deg', title: 'Left 1 Degree'},
          {name: 'left-2deg', title: 'Left 2 Degrees'},
          {name: 'right-1deg', title: 'Right 1 Degree'},
          {name: 'right-2deg', title: 'Right 2 Degrees'}
        ], join: '-', title: 'Polaroid'},
      {name: 'bg',
        rules:[
          {name: 'red', title: 'red'},
          {name: 'green', title: 'green'},
          {name: 'purple', title: 'purple'},
          {name: 'orange', title: 'orange'},
          {name: 'blue', title: 'blue'}
        ], join: '-', title: 'H2 Background Colors'}
    ]
  };
}

