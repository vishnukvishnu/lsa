

import {
    trigger,
    style,
    state,
    group,
    animate,
    transition,
    query,
  } from '@angular/animations';

export function routerTransition(){
    return slideToRight();
}

export function slideToRight(){
   return trigger('routerTransition', [

    state('void', style({})),
    state('*', style({})),
    transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('400ms ease', style({ transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('400ms ease', style({ transform: 'translateX(100%)'}))
    ]),
   ]);
}
// export const slideInAnimation =
//     trigger('myAnimation', [
//       transition('WelcomePageComponent => CitationsComponent', [
//         query(':enter, :leave', [
//           style({
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%'
//           })
//         ], { optional: true }),
//         query(':enter', [
//           style({ left: '-100%'})
//         ],  { optional: true }),
//         group([
//           query(':leave', [
//             animate('400ms ease', style({ left: '100%'}))
//           ], { optional: true }),
//           query(':enter', [
//             animate('400ms ease', style({ left: '0%'}))
//           ],  { optional: true })
//         ] ),
//       ])
//     ])
    
