import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerZIP } from "@electron-forge/maker-zip";
import { MakerDeb } from "@electron-forge/maker-deb";
import { MakerRpm } from "@electron-forge/maker-rpm";
import { AutoUnpackNativesPlugin } from "@electron-forge/plugin-auto-unpack-natives";
import { WebpackPlugin } from "@electron-forge/plugin-webpack";

import mainConfig from "./webpack.main.config";
import rendererConfig from "./webpack.renderer.config";
// import preloadConfig from "./webpack.preload.config";

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ["darwin"]),
    new MakerDeb({}),
    new MakerRpm({}),
  ],
  plugins: [
    new AutoUnpackNativesPlugin({}),
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            name: "main_window",
            html: "./src/renderer/resources/index.html",
            js: "./src/renderer/entry_points/main_window/main.ts",
            preload: {
              js: "./src/preload/main_window.ts",
            },
          },
          {
            name: "sticky_board",
            html: "./src/renderer/resources/index.html",
            js: "./src/renderer/entry_points/sticky_board/main.ts",
            preload: {
              js: "./src/preload/sticky_board.ts",
            },
          },
        ],
      },
    }),
  ],
};

export default config;
