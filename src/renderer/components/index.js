
import uiMenu from "./uiMenu";
import uiSearch from "./uiSearch";
import uiHead from "./uiHead";

const coms = {
    install: Vue => {
        Vue.component("uiMenu", uiMenu);
        Vue.component("uiSearch", uiSearch);
        Vue.component("uiHead", uiHead);
    },
};

export default coms;