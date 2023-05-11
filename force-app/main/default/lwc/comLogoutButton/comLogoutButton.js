import {LightningElement} from "lwc";
import {NavigationMixin} from "lightning/navigation";

const LOGOUTPAGEREF = {
	type: "comm__loginPage",
	attributes: {
		actionName: "logout"
	}
};

export default class ComLogoutButton extends NavigationMixin(LightningElement) {
	logout() {
		this[NavigationMixin.Navigate](LOGOUTPAGEREF);
	}
}
