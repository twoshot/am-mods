
!function () {
  // Default values for the settings
  let settings = {};
  
  // creates an instance of SettingsProvider
//   function createSettingsProvider()
//   {
//     let sp = new SettingsProvider(settings, next => { settings = next });

//     let section = sp.addSection("Multi-Server Chat");

//     section.addString("secret",
//       "Secret pass word.",
//       {maxLength: 40});
//     section.addBoolean("mscVerbose",
//       "Log chat to console?");

//     // we return our SettingsProvider instance
//     return sp;
//   }

  SWAM.on("gameWipe", () => {
    
  })

  SWAM.on("gamePrep", () => {
    
  });

  SWAM.registerExtension({
    name:"D35 dev",
    id:"d35dev",
    description:"ʅʕ•ᴥ•ʔʃ",
    version:"1",
    author:"twoshot",
    settingsProvider: createSettingsProvider()
  });

}();
