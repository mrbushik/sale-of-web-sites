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
    input: 'bonus-input',
    inputRectangle: '.phone-rectangl_bonus',
    inputCoount: 2,

});
costSubmit({
    formName: '.main_lead_form',
    input: 'lead-phone_input',
    inputRectangle: '.lead-rectangle_phone',
    inputCoount: 2,

});