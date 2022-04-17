import menu from './modules/menu';
import popUp from './modules/pop-up';
import siteExamples from './modules/examples';
import cost from './modules/cost';
import {
    costSubmit
} from './modules/costSubmit';
menu();
popUp();
siteExamples();
cost();
costSubmit({
    formName: '.form-question_bonus',
    mobilePhoneInput: 'bonus-input',
    mobilePhoneRectangle: '.phone-rectangl_bonus'

});