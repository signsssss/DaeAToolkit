import { INCREMENT_COUNTER, DECREMENT_COUNTER, READ_FILE,  } from '../actions/counter';
import update from 'react-addons-update';

const converterInitialState = {
    lines: '',
    field: []
}

const convertToArray = (lines) => {
    lines = lines.split('\n');

    lines.map((field, index, arr) => {
        arr[index] = field.split(' ');
    });

    return lines;
}

export default function viewer(state = converterInitialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case READ_FILE:
            return update(state, {
                field: { $set: convertToArray('0000000: 3f50 4e47 0d0a 1a0a 0000 000d 4948 4452  ?PNG........IHDR\n0000010: 0000 0258 0000 003f 0806 0000 0002 1b3f  ...X...?.......?\n0000020: 3100 0000 1974 4558 7453 6f66 7477 6172  1....tEXtSoftwar\n0000030: 6500 4164 6f62 6520 496d 6167 6552 6561  e.AdobeImageRea\n0000040: 6479 713f 653c 0000 5521 4944 4154 783f  dyq?e<..U!IDATx?\n0000050: 3f3f 0b7c 1cd5 953f 7f3f 5b3f 6cc9 96e4  ??.|...?.?[?l...\n0000060: 8784 5f3f 643f 0001 763f 003f 4926 0356  .._?d?..v?.?I&.V\n0000070: 123f 233f 59db 906c 083f 6b3f 3f05 6626  .?#?Y..l.?k??.f&\n0000080: 093f 243f 3f3f 3f11 1b42 323f 073f 493f  .?$????..B2?.?I?\n0000090: 7f60 673f 3f40 5e04 303f 3f19 3f04 3f31  .`g??@^.0??.?.?1\n00000a0: 093f 0c0f fbbf 9098 a725 4b3f 3f2d 6c4b  .?.......%K??-lK\n00000b0: 3f65 3f3f 557b 4f3f 3f3f 5b3f 3f3f 4777  ?e??U{O???[???Gw\n00000c0: 3f53 3f3f 4f59 3f5d 3f3f 553f 3f5d 3f3f  ?S??OY?]??U??]??\n00000d0: 3f73 3f31 2c3f 0212 3f44 223f 4824 527c  ?s?1,?..?D"?H$R|\n00000e0: 4a3f 2120 3f48 2412 3f44 223f 223f 4824  J?!?H$.?D"?"?H$\n00000f0: 123f 4422 3f22 3f48 2412 3f44 223f 223f  .?D"?"?H$.?D"?"?\n0000100: 4824 123f 4422 1160 3f48 2412 3f44 223f  H$.?D".`?H$.?D"?\n0000110: 3f6a 3f10 3f48 2412 3f54 3f7a 3f3f 6f3f  ?j?.?H$.?T?z??o?\n0000120: 363a 3679 3f3f 19c9 873e 3fc7 8b0e 3f11  6:6y??...>?...?.\n0000130: 3f0c 3f3f 4522 3f48 2452 792a 3f50 3fe0  ?.??E"?H$Ry*?P?.\n0000140: 978f 1c3f 783d 655a 3f3f 716a 3f4d 763f  ...?x=eZ??qj?Mv?\n0000150: 3f3f 3f5d 1932 3f0e 163f 4422 3f48 3f3f  ???].2?..?D"?H??\n0000160: 4777 3f3f 3fc4 9475 0f3f 462f 3f3f 250c  Gw???..u.?F/??%.\n0000170: 3f3f 643f 3f3f 3f17 2d79 3f3f 1401 163f  ??d????.-y??...?\n0000180: 443f 1c75 4a3f 3f3f 543f 5acd a666 3f3f  D?.uJ???T?Z..f??\n0000190: d5b0 6f3f 2a3f 3f7f 3574 3f3f 3f3f 2565  ..o?*??.5t????%e\n00001a0: 3f65 3f17 7003 1e3f 3f49 dcb8 3f4f 163f  ?e?.p..??I..?O.?\n00001b0: 4647 3f00 3f44 223f 3f3a d8b4 3f43 154e  FG?.?D"??:..?C.N') }
            })
        default:
            return state;
    }
}


// 0x0000: 4500 01a8 6e6c 4000 2011 3a26 c0a8 000a\n0x0010: efff 0001 1cf5 1ce8 0194 69ff 5254 5053\n0x0020: 0201 0102 632f cea9 0000 0096 0000 0001
