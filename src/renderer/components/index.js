
import uiMenu from "./uiMenu";
import uiSearch from "./uiSearch";

const coms = {
    install: Vue => {
        Vue.component("uiMenu", uiMenu);
        Vue.component("uiSearch", uiSearch);
    },
};

export default coms;