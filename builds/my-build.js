module.exports = {
    board_env: "STM32F103RET6_creality",
    active: true,
    min_version: "2.1.2",
    meta: {
      stable_name: "ender_3_pro_4.2.7-{{marlin_version}}",
      nightly_name: "ender_3_pro_4.2.7-{{current_date}}"
    },
    based_on: {
      repo: "https://github.com/MarlinFirmware/Configurations/",
      path: "/config/examples/Creality/Ender-3 Pro/CrealityV427/",
      stable_branch: "release-{{marlin_version}}",
      nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
      enable: ["BLTOUCH", "HIGH_TEMP"],
      disable: []
    },
    configuration_adv: {
      enable: [],
      disable: []
    }
  };
  