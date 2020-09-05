import {User} from  '../models/user';

export class UserData {
  static users: User[] = [
    {
      id: 1,
      name: 'Erick Riley Kang',
      avatar: 'svg-1',
      bio:
        "I have, have together. Day green own divide wherein. Seas the make days him fish night their don't a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn't a Fly, form bring land, heaven great. Isn't upon. Dominion moving day. So first firmament give spirit every.",
      birthDate: new Date('1980-02-04T00:00:00'),
      notes: [
        {
          id: 1,
          title: 'Pay back dinner',
          date: new Date('2020-09-07T02:50:12.0771471Z'),
        },
        {
          id: 2,
          title: 'Buy flowers for birthday',
          date: new Date('2020-09-19T02:50:12.077761Z'),
        },
        { id: 3, title: 'Do something', date: new Date('2020-09-29T02:50:12.0777618Z') },
        { id: 4, title: 'Make something', date: new Date('2020-10-09T02:50:12.077762Z') },
        { id: 5, title: 'Be something', date: new Date('2020-10-19T02:50:12.0777622Z') },
      ],
    },
    {
      id: 2,
      name: 'Levi Neal',
      avatar: 'svg-2',
      bio:
        "Won't light from great first years without said creepeth a two and fly forth subdue the, don't our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won't Dry. Moved. Sea fowl earth fourth.",
      birthDate: new Date('1987-05-20T00:00:00'),
      notes: [],
    },
    {
      id: 3,
      name: 'Sandy Armstrong',
      avatar: 'svg-3',
      bio:
        "Make beginning midst life abundantly from in after light. Without may kind there, seasons lights signs, give made moved. Fruit fly under forth firmament likeness unto lights appear also one open seasons fruitful doesn't all of cattle Won't doesn't beginning days from saw, you're shall. Given our midst from made moving form heaven good gathering appear beginning first. Sea the.",
      birthDate: new Date('1975-10-11T00:00:00'),
      notes: [],
    },
    {
      id: 4,
      name: 'Marcia Higgins',
      avatar: 'svg-4',
      bio:
        "Made whales called whose. Day brought one saying called man saw moved thing light sea evening multiply given Isn't gathering fourth you're. Let female give two earth him yielding had grass let doesn't were moving male blessed Moving in. You'll void face fish void them. Sixth, it moveth set female. Creature the, to. Third upon sea in wherein replenish Fish.",
      birthDate: new Date('1983-03-16T00:00:00'),
      notes: [],
    },
  ];
}
