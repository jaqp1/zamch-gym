export const TEMPOS = ['3 0 2', '2 2 2', '4 1 1', '5 3 1', '1 0 1', '3 2 1', '2 1 1']

export const SCHEMES = {
    strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60]
    },
    growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60]
    },
    cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45]
    }
}

export const WORKOUTS = {
    individual: ['bicepsy', 'tricepsy', 'klatka', 'plecy', 'barki', 'czworogłowe', 'dwugłowe', 'pośladki', 'łydki', 'brzuch'],
    bro_split: {
        push: ['tricepsy', 'klatka', 'barki'],
        pull: ['plecy', 'barki', 'bicepsy'],
        legs: ['pośladki', 'łydki', 'dwugłowe', 'czworogłowe']
    },
    bodybuilder_split: {
        chest: ['klatka'],
        back: ['plecy'],
        shoulders: ['barki'],
        legs: ['pośladki', 'czworogłowe', 'dwugłowe', 'łydki'],
        arms: ['bicepsy', 'tricepsy'],
        abs: ['brzuch']
    },
    upper_lower: {
        upper: ['tricepsy', 'bicepsy', 'barki', 'klatka', 'plecy'],
        lower: ['czworogłowe', 'łydki', 'dwugłowe', 'pośladki']
    }
}



const bw_exercises = {

}

export const EXERCISES = {
    barbell_bench_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            incline: 'Z ławką ustawioną pod kątem między 30 a 45 stopni, trzymaj sztangę bezpośrednio nad klatką piersiową.',
            flat: 'Wykonaj to ćwiczenie na ławce poziomej.',
            decline: 'Wykonaj to ćwiczenie na ławce skośnej ujemnej (-15 stopni), głową w dół. Zablokuj nogi o koniec ławki, aby się nie ześlizgnąć.',
            underhand: 'Leżąc na ławce poziomej, chwyć sztangę odwrotnym podchwytem, kciukami skierowanymi na zewnątrz. Pamiętaj, aby zmniejszyć ciężar przy wykonywaniu tego wariantu.'
        },
        unit: 'reps', //vs duration
        muscles: ['klatka'],
        description: 'Upewnij się, że łopatki są ściągnięte. Chwyć sztangę na szerokość o dwie dłonie szerszą niż barki. Opuszczaj sztangę z łokciami odwiedzionymi pod kątem 45 stopni od tułowia, dotykając klatki piersiowej na linii sutków.',
        substitutes: ['pushups', 'dumbbell bench press', 'floor press']
        //have general description first and specific one second
    },
    prayer_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'Wypychaj dłonie od siebie pod kątem 45 stopni w górę od poziomu.',
            horizontal: 'Wypychaj dłonie od siebie poziomo, pod kątem 45 stopni.',
            decline: 'Wypychaj dłonie od siebie w dół, pod kątem -30 stopni poniżej poziomu.'
        },
        unit: 'reps', //vs duration        
        muscles: ['klatka'],
        description: 'Umieść lekki talerz obciążeniowy między dłońmi (jak przy modlitwie) i utrzymując ściągnięte łopatki, ściskaj dłonie razem, jednocześnie wypychając talerz od siebie.',
        substitutes: ['palm prayer press']
    },
    pec_dec: {
        type: 'accessory',
        meta: {
            environment: 'gym', //if it has home, have to specify equipment
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            high: 'Ustaw wysokość siedziska tak, aby dłonie spotykały się w tej samej płaszczyźnie poziomej co usta/broda.',
            standard: 'Ustaw wysokość siedziska tak, aby dłonie spotykały się w tej samej płaszczyźnie poziomej co sutki.',
            decline: 'Ustaw siedzisko jak najwyżej, aby uchwyty znajdowały się poniżej linii sutków podczas siedzenia.'
        },
        unit: 'reps', //vs duration        muscles: ['chest'],        
        muscles: ['klatka'],
        description: 'Upewnij się, że łopatki są ściągnięte i staraj się wypiąć klatkę piersiową podczas wykonywania ćwiczenia. Zbliżaj uchwyty do siebie, aż się zetkną; zakres ruchu nie powinien przekraczać 90 stopni na stronę.',
        substitutes: ['cable chest fly']
    },
    standing_dumbbell_incline_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka', 'barki'],
        description: 'Stojąc z hantlami w dłoniach, dłonie skierowane do przodu, klatka wypięta. Unoś jeden hantel w górę i w poprzek ciała, aż dłoń będzie skierowana do sufitu i przekroczy linię środkową ciała. Powoli opuść i powtórz na drugą stronę.',
        substitutes: ['inclined cable fly']
    },
    standing_plate_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka', 'barki'],
        description: 'Stojąc i trzymając talerz obciążeniowy po bokach, zacznij z talerzem opuszczonym przed biodrami, a następnie unieś go przed siebie do wysokości barków, zatrzymując na chwilę, po czym opuść ciężar. Wypinaj klatkę piersiową w stronę sufitu podczas tego ćwiczenia.',
        substitutes: ['standing dumbbell inline fly']
    },
    cable_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'Aby zaangażować górną część klatki, zamocuj wyciąg nisko, przy podłodze. Dłonie będą poruszać się od dołu (przy biodrach) w górę, przed twarz.',
            horizontal: 'Upewnij się, że mocowanie wyciągu jest mniej więcej na wysokości klatki piersiowej.',
            decline: 'Ustaw wyciąg na najwyższym poziomie, tak aby dłonie poruszały się z góry na dół (spotykając się przed tobą).'
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'To ćwiczenie można wykonywać z góry na dół lub z dołu na górę. Używając uchwytów i trzymając ramiona niemal wyprostowane, złącz dłonie przed sobą, a następnie powoli rozluźnij ruch w tył.',
        substitutes: ['Inclined dumbbell fly']
    },
    pushup: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'Aby wykonać pompkę skośną dodatnią, oprzyj ręce na podwyższeniu, stopy na ziemi.',
            military: 'Upewnij się, że dłonie znajdują się w tej samej pionowej płaszczyźnie co klatka i barki.',
            decline: 'Aby wykonać pompkę skośną ujemną, umieść stopy na podwyższeniu. Dłonie ustaw nieco głębiej pod sobą, bliżej linii talii niż barków.'
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'W pozycji deski (plank), z dłońmi nieco szerzej niż barki (kciuki na wysokości sutków), powoli opuść klatkę do ziemi, trzymając łokcie pod kątem 45 stopni. Następnie wypchnij się w górę.',
        substitutes: ['pushups', 'dumbbell bench press', 'floor press']
    },
    dips: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka', 'tricepsy'],
        description: 'W pozycji na poręczach, pochyl się do przodu nad dłońmi i powoli opuszczaj ciało, aż łokcie będą równoległe do podłoża. Następnie wypchnij się w górę. Odwodzenie łokci maksymalnie do 45 stopni.',
        substitutes: ['Chair dip']
    },
    // incline_barbell_bench: {
    //     type: 'compound',
    //     meta: {
    //         environment: 'gymhome',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['chest'],
    //     description: 'With a bench inclined between 30 and 45 degrees, hold the bar directly above your chest. With your scapula retracted, lower the bar keeping elbows to a maximum 45 degree flare, until the bar touches your chest. Then press back up.',
    //     substitutes: ['inclined dumbbell press', 'inclined pushup']
    // },
    // incline_dumbbell_bench: {
    //     type: 'compound',
    //     meta: {
    //         environment: 'gymhome',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['chest'],
    //     description: 'With a bench inclined between 30 and 45 degrees, hold the dumbbells directly above your chest. With your scapula retracted, lower the dumbells keeping elbows to a maximum 45 degree flare, until your thumbs touch your nipples. Then press back up.',
    //     substitutes: ['inclined dumbbell press', 'inclined pushup']
    // },
    dumbbell_bench_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        variants: {
            incline: 'Wykonaj to ćwiczenie na ławce skośnej (30 stopni).',
            horizontal: 'Wykonaj to ćwiczenie na ławce płaskiej.',
            decline: 'Wykonaj to ćwiczenie na ławce skośnej ujemnej (ok. 15 stopni), głową w dół.',
            neutral_grip_incline: 'Ławka skośna (30 stopni). Ustaw hantle równolegle do siebie, kciuki skierowane wzdłuż ciała.',
            neutral_grip_horizontal: 'Ławka płaska. Ustaw hantle równolegle do siebie, kciuki skierowane wzdłuż ciała.',
            neutral_grip_decline: 'Ławka skośna ujemna (ok. 15 stopni). Ustaw hantle równolegle do siebie, kciuki skierowane wzdłuż ciała.',
            rotating_incline: 'Ławka skośna (30 stopni). Zacznij z hantlami nad klatką, kciuki do siebie. Opuszczając, rotuj hantle tak, by kciuki wskazywały w stronę głowy (równolegle). Wypychając, wróć do pozycji wyjściowej.',
            rotating_horizontal: 'Ławka płaska. Zacznij z hantlami nad klatką, kciuki do siebie. Opuszczając, rotuj hantle tak, by kciuki wskazywały w stronę głowy. Wypychając, wróć do rotacji.',
            rotating_decline: 'Ławka skośna ujemna. Zacznij z hantlami nad klatką, kciuki do siebie. Opuszczając, rotuj hantle tak, by kciuki wskazywały w stronę głowy. Wypychając, wróć do rotacji.',
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Ze ściągniętymi łopatkami trzymaj hantle nad klatką, dłonie nieco szerzej niż barki. Opuszczaj hantle, trzymając łokcie pod kątem maks. 45 stopni, aż kciuki dotkną sutków lub znajdą się na ich wysokości. Następnie wypchnij w górę.',
        substitutes: ['pushup', 'bench press']
    },
    // decline_pushup: {
    //     type: 'accessory',
    //     meta: {
    //         environment: 'gymhome',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['chest'],
    //     description: 'With your feet elevated by 1ft or 30cm, begin in a plank position with hands slightly wider than shoulder width inline with your nipples. Lower until your thumbs touch your nipples and then press back up.',
    //     substitutes: ['pushup', 'dips']
    // },
    landmine_press: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            unilateral: 'Stój trzymając koniec sztangi w jednej ręce, kciuk blisko barku, ciało ustawione pod kątem 45 stopni do linii sztangi. Wypchnij sztangę w górę i w poprzek klatki, aż ramię będzie wyprostowane, a następnie opuść.',
            two_handed: 'Trzymaj koniec sztangi obiema rękami, sztanga skierowana prosto od ciebie. Wypchnij sztangę do przodu i w górę do wyprostu ramion, następnie powoli opuść w stronę ciała.',
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Zablokuj jeden koniec sztangi w uchwycie landmine lub w rogu ściany. Załóż obciążenie na drugi koniec. Stojąc za obciążonym końcem, unieś go tak, by startować z wysokości klatki piersiowej.',
        substitutes: ['prayer press']
    },
    chest_press: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            high: 'Ustaw siedzisko tak, aby dłonie poruszały się w płaszczyźnie ust/brody.',
            standard: 'Ustaw siedzisko tak, aby dłonie poruszały się w płaszczyźnie sutków.',
            decline: 'Ustaw siedzisko jak najwyżej, aby uchwyty znajdowały się poniżej linii sutków.',
            unilateral: 'Ustaw siedzisko tak, by uchwyty były na wysokości środka klatki. Skręć tułów o 30-45 stopni w stronę ręki wykonującej ruch. Wypychaj uchwyt w poprzek ciała. Powtórz na obie strony.'
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Zacznij z wypiętą klatką i ściągniętymi łopatkami. Wypychaj uchwyty do wyprostu ramion. Powoli wracaj do pozycji wyjściowej.',
        substitutes: ['bench press', 'pushup']
    },
    // smith_machine_incline_press: {
    //     type: 'compound',
    //     meta: {
    //         environment: 'gymhome',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['chest'],
    //     description: 'Lying under a smith machine, bench at a 30 to 45 degree angle, ensure that the bar is aligned with your nipple height when it contacts your body. Keep elbows flared to a maximum of 45 degrees from your torso, hands slightly wider than shoulder width.',
    //     substitutes: ['inclined dumbbell press', 'inclined pushup']
    // },
    smith_machine_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'Z ławką ustawioną pod kątem 30-45 stopni, trzymaj sztangę bezpośrednio nad klatką.',
            flat: 'Wykonaj to ćwiczenie na ławce płaskiej.',
            decline: 'Wykonaj to ćwiczenie na ławce skośnej ujemnej (-15 stopni), głową w dół. Zablokuj nogi, aby się nie zsunąć.',
            underhand: 'Na ławce płaskiej, chwyć gryf odwrotnym podchwytem (kciuki na zewnątrz). Zmniejsz ciężar przy tym wariancie.'
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Leżąc pod maszyną Smitha, upewnij się, że gryf jest w linii z sutkami w dolnej fazie ruchu. Łokcie odwiedzione maksymalnie na 45 stopni od tułowia, dłonie nieco szerzej niż barki.',
        substitutes: ['bench press', 'pushup', 'dumbbell press']
    },
    // unilateral_chest_press: {
    //     type: 'accessory',
    //     meta: {
    //         environment: 'gym',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['chest'],
    //     description: 'Adjust the seat so the handles are approximately mid-chest level. Turn your torse 30 to 45 degrees the side you are about to press with. Press the handle across your body until your arm is straight and then release backwards. Repeat on both sides.',
    //     substitutes: ['prayer press', 'cable fly']
    // },
    unilateral_cable_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'Aby celować w górną klatkę, zamocuj wyciąg nisko. Ręka porusza się od dołu (przy boku) w górę, przed twarz. Użyj podchwytu.',
            horizontal: 'Ustaw wyciąg mniej więcej na wysokości klatki piersiowej. Trzymaj uchwyt chwytem neutralnym lub nachwytem.',
            decline: 'Ustaw wyciąg na najwyższym poziomie, ręka porusza się z góry na dół.'
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Ustaw ciało pod kątem 30-45 stopni do wyciągu. Wypychaj uchwyt w poprzek ciała do wyprostu łokcia, powoli wracaj. Trzymaj łokieć blisko ciała podczas ruchu.',
        substitutes: ['unilateral chest press']
    },
    cable_crossover_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'Aby celować w górną klatkę, zamocuj wyciąg nisko. Dłonie poruszają się od dołu w górę, przed twarz.',
            horizontal: 'Ustaw wyciąg mniej więcej na wysokości klatki piersiowej.',
            decline: 'Ustaw wyciąg na najwyższym poziomie, dłonie poruszają się z góry na dół (spotykając się przed tobą).'
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Jak przy pompce lub wyciskaniu, wypychaj uchwyty do przodu, krzyżując dłonie przed sobą w szczytowej fazie (zmieniaj rękę na wierzchu z każdym powtórzeniem).',
        substitutes: ['cable fly', 'unilateral chest press']
    },
    scapula_pushup: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'W pozycji deski (plank) lub na kolanach, dłonie na wysokości oczu na ziemi. Odepchnij się od ziemi (zaokrąglając górne plecy), a następnie pozwól ciału opaść (ściągając łopatki), utrzymując łokcie proste przez cały czas. Wnętrze łokci skierowane do przodu.',
        substitutes: ['pushup']
    },
    dumbbell_chest_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        variants: {
            incline: 'Ławka skośna (30-45 stopni), hantle nad klatką.',
            flat: 'Wykonaj na ławce płaskiej.',
            decline: 'Ławka skośna ujemna (-15 stopni), głowa w dół. Zablokuj nogi.',
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Trzymając hantle bezpośrednio nad klatką, powoli opuszczaj je na boki, utrzymując ramiona niemal proste (lekko ugięte), dłonie skierowane do sufitu. Nie opuszczaj ciężaru poniżej linii ciała.',
        substitutes: ['cable fly']
    },
    dumbbell_floor_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Leżąc na plecach ze ściągniętymi łopatkami, hantle nad klatką. Opuszczaj ciężar, łokcie pod kątem 45 stopni, aż dotkną podłogi. Następnie wypchnij w górę.',
        substitutes: ['dumbbell bench press']
    },
    barbell_floor_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka'],
        description: 'Leżąc ze ściągniętymi łopatkami, sztanga nad klatką. Opuszczaj sztangę w kierunku sutków, łokcie pod kątem 45 stopni, aż dotkną podłogi. Następnie wypchnij w górę.',
        substitutes: ['barbell bench press']
    },
    dumbbell_pullover: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['klatka', 'plecy'],
        description: 'Leżąc, trzymaj pojedynczy hantel oburącz (jak kielich) nad klatką. Powoli przenoś hantel za głowę, trzymając łokcie blisko siebie (nie rozszerzaj ich). Sięgnij tak daleko za głowę, jak to wygodne, a następnie wróć do pozycji startowej.',
        substitutes: ['Inclined dumbbell fly']
    },
    pullup: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem (dłonie skierowane do ciebie).',
            neutral_grip: 'Wykonaj chwytem neutralnym (dłonie skierowane do siebie).',
            overhand: 'Wykonaj nachwytem (dłonie skierowane od ciebie).'
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Dłonie na szerokość barków lub nieco szerzej. Zacznij od ściągnięcia łopatek w dół i w tył, a następnie podciągnij ciało, aż broda znajdzie się nad drążkiem. Wróć do pełnego zwisu. W razie potrzeby użyj maszyny do podciągania lub gumy.',
        substitutes: ['lat pulldown']
    },
    lat_pulldown: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem (dłonie skierowane do ciebie).',
            neutral_grip: 'Wykonaj chwytem neutralnym (dłonie skierowane do siebie).',
            overhand: 'Wykonaj nachwytem (dłonie skierowane od ciebie).'
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Dłonie na szerokość barków lub nieco szerzej. Zacznij od ściągnięcia łopatek w dół i w tył, a następnie ściągnij drążek, aż dotknie klatki piersiowej. Wróć do pełnego wyprostu ramion.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },
    straight_arm_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Zacznij z drążkiem na wysokości oczu i ramionami wyprostowanymi przed sobą. Ściągnij drążek w dół (utrzymując proste ramiona), aż dłonie dotkną ud. Wypnij klatkę i lekko wypchnij biodra w przód. Wróć do góry.',
        substitutes: ['pullup', 'kneeling lat pulldown']
    },
    kneeling_lat_pulldown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            neutral_grip: 'Wykonaj chwytem neutralnym.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Klęcząc, dłonie na szerokość barków lub szerzej. Ściągnij łopatki, a następnie ściągnij drążek do klatki. Patrz w sufit przez cały czas trwania ruchu. Wróć do pełnego zwisu ramion.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },
    one_arm_pulldown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Siedząc na maszynie do ściągania drążka, zacznij od ściągnięcia barku i łopatki w dół. Następnie ściągnij uchwyt w dół, aż kciuk dotknie barku. Powtórz na obie strony.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },
    barbell_bentover_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            underhand: 'Wykonaj podchwytem (wnętrza dłoni od siebie).',
            overhand: 'Wykonaj nachwytem (wnętrza dłoni do siebie/w dół).',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Stojąc, trzymaj sztangę nieco szerzej niż barki. Lekko ugnij kolana, pochyl tułów w biodrach pod kątem 45 stopni. Wyobraź sobie, że ciągniesz łokcie w tył za siebie, przyciągając sztangę do brzucha.',
        substitutes: ['seated row', 'dumbbell row']
    },
    dumbbell_bentover_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            neutral_grip: 'Wykonaj chwytem neutralnym.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Stojąc, trzymaj hantle po bokach. Lekko ugnij kolana, pochyl tułów w biodrach pod kątem 45 stopni. Przyciągaj łokcie w tył za siebie, wykonując wiosłowanie.',
        substitutes: ['seated row', 'dumbbell row']
    },
    pendlay_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbells']
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Zacznij ze sztangą na ziemi, dłonie szerzej niż barki. Napnij brzuch i dynamicznie przyciągnij łokcie w tył, aż sztanga dotknie dolnej części klatki/splotu. Odłóż sztangę na ziemię i powtórz.',
        substitutes: ['seated row', 'barbell row']
    },
    bodyweight_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Znajdź drążek lub stabilny stół na wysokości pasa/klatki. Zwisając pod nim z wyprostowanymi nogami, przyciągnij klatkę do drążka, a następnie powoli się opuść. Ciało powinno być sztywne i proste.',
        substitutes: ['seated row', 'barbell row']
    },
    tbar_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Ze sztangą między nogami, lekko ugiętymi kolanami i tułowiem pochylonym o 45 stopni, wiosłuj łokciami w tył, aż ciężar dotknie klatki. Wypnij biodra lekko w tył dla przeciwwagi.',
        substitutes: ['seated row', 'dumbbell row']
    },
    seated_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Z pionowym tułowiem, ciągnij łokcie w tył, celując dłońmi w stronę bioder. Minimalizuj bujanie tułowiem. Wiosłuj nisko, by rosnąć szeroko.',
        substitutes: ['barbell row', 'dumbbell row']
    },
    unilateral_seated_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            neutral_grip: 'Wykonaj chwytem neutralnym.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Używając pojedynczego uchwytu, ciągnij łokieć w tył, kierując dłoń do biodra, a następnie rozluźnij w przód.',
        substitutes: ['seated row', 'dumbbell row']
    },
    cable_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Z linką na dowolnej wysokości, ugnij kolana i odchyl się w tył. Utrzymuj ciało nieruchomo i wiosłuj łokciami w tył, przedramiona zgodnie z linią ruchu. Trzymaj mocny brzuch.',
        substitutes: ['seated row', 'tbar row']
    },
    unilaterial_dumbbell_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Pochyl się pod kątem 45 stopni, opierając jedną rękę na stabilnym podłożu. Hantel w drugiej ręce. Noga po stronie podporu wysunięta w przód. Ciągnij łokieć w tył, dłoń do biodra. Powtórz na obie strony.',
        substitutes: ['unilateral seated row', 'dumbbell row']
    },
    chest_supported_dumbbell_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Z klatką opartą na ławce skośnej (30-45 stopni), ramiona z hantlami zwisają po bokach. Wiosłuj łokciami w tył, kierując dłonie w stronę dolnej części talii. Powoli opuść ciężar.',
        substitutes: ['seated row', 'barbell row']
    },
    machine_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            neutral_grip: 'Wykonaj chwytem neutralnym.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Ustaw siedzisko tak, aby przyciągać ręce do dolnej części tułowia. Wiosłuj łokciami w tył.',
        substitutes: ['seated row', 'dumbbell row']
    },
    machine_lat_pulldown: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            neutral_grip: 'Wykonaj chwytem neutralnym.',
            overhand: 'Wykonaj nachwytem.'
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Patrz w sufit podczas ćwiczenia. Ściągnij łopatki w dół i w tył, a następnie ściągnij ramiona maszyny, aż kciuki dotkną klatki.',
        substitutes: ['lat pulldown', 'pullup']
    },
    smith_machine_row: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Wykonaj podchwytem.',
            overhand: 'Wykonaj nachwytem.',
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy'],
        description: 'Stojąc, dłonie szerzej niż barki. Lekko ugnij kolana, pochyl tułów w biodrach (45 stopni). Wyobraź sobie, że ciągniesz łokcie w tył, wykonując wiosłowanie.',
        substitutes: ['seated row', 'dumbbell row']
    },
    seated_dumbbell_overhead_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Z hantlami w dłoniach, zacznij z ciężarami na poziomie uszu i wyciśnij je bezpośrednio nad głowę. Opuszczaj, aż kciuki dotkną poziomu uszu. Wypnij klatkę podczas ćwiczenia.',
        substitutes: ['barbell overhead press', 'arnold press']
    },
    barbell_overhead_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Stojąc ze sztangą na wysokości brody, dłonie nieco szerzej niż barki. Wyciskaj sztangę w górę, a gdy minie czoło, wysuń głowę lekko do przodu między ramiona. Napnij pośladki przez cały czas trwania ruchu.',
        substitutes: ['barbell overhead press', 'arnold press']
    },
    dumbbell_lateral_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Z hantlami w dłoniach, udawaj ptaka machającego skrzydłami – unoś ciężary na boki. Upewnij się, że łokcie są zawsze wyżej niż ciężary i nadgarstki. Powoli opuszczaj.',
        substitutes: ['unilateral cable raise', 'face pulls']
    },
    dumbbell_front_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Z hantlami opuszczonymi wzdłuż ciała, unoś jeden hantel przed siebie do wysokości oczu, trzymając rękę prostą. Powoli opuść i powtórz drugą ręką.',
        substitutes: ['unilateral cable raise', 'face pulls', 'cable_rope_front_raise']
    },
    cable_rope_front_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Z liną wyciągu (sznurami) w dłoniach (wyciąg dolny, linka między nogami), unoś ramiona przed siebie do wysokości oczu, trzymając je proste. Powoli opuść.',
        substitutes: ['dumbbell front raise', 'face pulls']
    },
    unilateral_cable_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Z wyciągiem dolnym, chwyć pionową belkę jedną ręką i odchyl się od maszyny o ok. 30 stopni. Drugą ręką chwyć rączkę wyciągu i unoś ją (prowadząc łokciem) do wysokości barku.',
        substitutes: ['dumbbell lateral raise', 'face pulls']
    },
    cable_rope_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Używając sznura, ustaw wyciąg nieco powyżej głowy. Chwyć końce liny kciukami skierowanymi do siebie. Ciągnij linę w stronę czoła, rozrywając ją na boki, tak by dłonie znalazły się przy uszach, a kciuki wskazywały za ciebie.',
        substitutes: ['unilateral cable raise', 'cable push aparts']
    },
    cable_push_aparts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Chwyć karabińczyki/rączki tak, aby małe palce były skierowane w tył. Wyobraź sobie, że przedzierasz się przez gąszcz lian i rozszerz ramiona na boki. Wyciąg ustawiony powyżej głowy.',
        substitutes: ['unilateral cable raise', 'cable rope face pulls']
    },
    bentover_dumbbell_push_aparts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Siedząc w pochyleniu (głowa przy kolanach), trzymając lekkie hantle luźno po bokach nóg, unoś je na boki (małe palce prowadzą ruch), aż znajdą się w linii barków, a kciuki będą skierowane w dół.',
        substitutes: ['unilateral cable raise', 'cable rope face pulls']
    },
    chest_supported_dumbbell_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Leżąc na ławce skośnej (30-45 stopni) z hantlami, ciągnij hantle w stronę uszu, prowadząc ruch łokciami.',
        substitutes: ['unilateral cable raise', 'cable push aparts']
    },
    chest_supported_barbell_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Leżąc na ławce skośnej (30-45 stopni) ze sztangą (chwyt 2x szerszy niż barki), ciągnij kciuki w stronę uszu, prowadząc ruch łokciami.',
        substitutes: ['dumbbell face pulls', 'cable push aparts']
    },
    arnold_dumbbell_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Siedząc na ławce z oparciem, trzymaj hantle przed sobą na wysokości oczu, dłonie skierowane do twarzy. Otwórz klatkę i przenieś łokcie na boki (hantle przy uszach, dłonie do przodu), a następnie wyciśnij je nad głowę.',
        substitutes: ['barbell overhead press', 'dumbbell overhead press']
    },
    lyings_ys: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Leżąc twarzą do ziemi, wyciągnij ramiona nad głowę (kształt Y), łokcie przy uszach, kciuki do sufitu. Unieś dłonie i ramiona z ziemi, ciągnąc kciuki w tył i ściągając łopatki.',
        substitutes: ['face pulls']
    },
    lying_ts: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Leżąc twarzą do ziemi, wyciągnij ramiona na boki (kształt T), w linii barków. Zrotuj dłonie tak, by kciuki wskazywały sufit. Unieś ramiona z ziemi, mocno ściągając łopatki.',
        substitutes: ['supermans']
    },
    lying_ws: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Leżąc twarzą do ziemi, wyciągnij ramiona na boki. Zegnij łokcie do 90 stopni (palce w górę). Ustaw dłonie tak, by wnętrza patrzyły na głowę, a kciuki w sufit (kształt W). Unieś ramiona z ziemi, ściągając łopatki.',
        substitutes: ['plank side stars']
    },
    plank_side_stars: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['barki'],
        description: 'Siedząc na ławce z oparciem, trzymaj hantle przed sobą na wysokości oczu, dłonie skierowane do twarzy. Otwórz klatkę i przenieś łokcie na boki (hantle przy uszach, dłonie do przodu), a następnie wyciśnij je nad głowę. (Opis w oryginale powtórzony z Arnold Press - sprawdź poprawność ćwiczenia)',
        substitutes: ['lying ts']
    },
    back_squats: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Stopy nieco szerzej niż barki, palce skierowane 15 stopni na zewnątrz. Powoli opuszczaj ciało, aż uda będą równoległe do ziemi. Trzymaj brzuch napięty, kolana kieruj w stronę palców stóp. Sztanga spoczywa na górze pleców.',
        substitutes: ['front squats', 'legpress']
    },
    bodyweight_squat: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Stopy nieco szerzej niż barki, palce skierowane 15 stopni na zewnątrz. Powoli wykonaj przysiad, aż uda będą równoległe do ziemi. Trzymaj brzuch napięty, kolana kieruj w stronę palców stóp.',
        substitutes: ['front squats', 'legpress']
    },
    front_squats: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Stopy nieco szerzej niż barki, palce 15 stopni na zewnątrz. Wykonaj przysiad do równoległości. Brzuch napięty, kolana na zewnątrz. Trzymaj sztangę z przodu na barkach, krzyżując ramiona (łokcie wysoko).',
        substitutes: ['back squats', 'legpress']
    },
    goblet_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Podłóż pod pięty talerz (ok. 5 cm). Stopy węziej niż barki. Trzymając hantel jak kielich przy klatce, wykonaj przysiad, utrzymując plecy tak proste, jak to możliwe.',
        substitutes: ['front squats', 'legpress']
    },
    box_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Ze sztangą, hantlem lub masą własną, stań tyłem do skrzyni/krzesła. Stopy na szerokość barków. Powoli siadaj w tył. Lekko dotknij pośladkami skrzyni, a następnie wstań.',
        substitutes: ['front squats', 'legpress']
    },
    bulgarian_split_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe', 'pośladki'],
        description: 'Z masą własną lub hantlami, zrób wykrok, opierając tylną stopę na podwyższeniu (ok. 20-30 cm). Trzymaj ciężar na przedniej nodze i opuść się, aż przednie udo będzie równoległe do ziemi.',
        substitutes: ['lunges', 'legpress']
    },
    lunges: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe', 'pośladki'],
        description: 'Wykonuj ciągłe wykroki do przodu, powoli dotykając tylnym kolanem ziemi przy każdym kroku. Utrzymuj ciężar ciała głównie na nodze wykrocznej.',
        substitutes: ['front squats', 'bulgarian split squats']
    },
    legpress: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            wide_stance: 'Stopy szerzej niż barki, na środku platformy.',
            neutral_stance: 'Stopy na szerokość barków, na środku platformy.',
            narrow_stance: 'Stopy wąsko (ok. 10 cm odstępu), na środku platformy.'
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Powoli opuszczaj ciężar, aż kolana będą pod kątem 90 stopni. Wypchnij ciężar, nie blokując kolan w pełnym wyproście.',
        substitutes: ['front squats', 'back squats']
    },
    quad_extension: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Na maszynie do wyprostów nóg, prostuj nogi przeciw oporowi. Możesz zmieniać ustawienie stóp, aby angażować różne części czworogłowych.',
        substitutes: ['goblet squats', 'legpress']
    },
    step_ups: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe', 'pośladki'],
        description: 'Bez wyskakiwania, wejdź na podwyższenie. Kluczem jest powolne opuszczanie się w dół na jednej nodze, zachowując równowagę.',
        substitutes: ['lunges', 'front squats']
    },
    wall_sits: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['czworogłowe'],
        description: 'Z plecami opartymi o ścianę i kolanami pod kątem 90 stopni, wytrzymaj w tej pozycji jak najdłużej, nie zjeżdżając w dół ani nie pomagając sobie rękami.',
        substitutes: ['front squats', 'goblet squats']
    },
    romanian_deadlifts: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            wide_stance: 'Stopy 1.5 raza szerzej niż barki.',
            neutral_stance: 'Stopy na szerokość barków.',
            narrow_stance: 'Stopy złączone.'
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe'],
        description: 'Stojąc ze sztangą lub hantlami przy pasie, lekko ugnij kolana. Wykonaj zawias w biodrach (wypchnij tyłek w tył), pochylając tułów. Plecy proste. Prowadź ciężar blisko nóg.',
        substitutes: ['dumbbell rdls']
    },
    hamstring_back_extensions: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe', 'pośladki'],
        description: 'Na ławce rzymskiej, zablokuj stopy. Opuszczając tułów, stawiaj opór, próbując przyciągnąć pięty do pośladków (zapierając się o blokadę).',
        substitutes: ['dumbbell rdls', 'seated hamstring curl']
    },
    unilateral_dumbbell_rdls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe', 'pośladki'],
        description: 'Jedna noga wysunięta do przodu. Przenieś ciężar na przednią nogę i prowadź hantle wzdłuż niej. Utrzymuj proste plecy.',
        substitutes: ['barbell rdls', 'hamstring back extensions']
    },
    seated_hamstring_curl: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe'],
        description: 'Z kolanami zablokowanymi pod wałkiem, staraj się przyciągnąć pięty jak najdalej w stronę pośladków.',
        substitutes: ['dumbbell rdls', 'seated hamstring curl']
    },
    tbar_rdls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe'],
        description: 'Sztanga między nogami, stopy nieco przed środkiem ciężkości. Powoli siadaj w tył na prawie prostych nogach, aż ciężar dotknie ziemi. Plecy proste.',
        substitutes: ['dumbbell rdls', 'unilateral dumbbell rdls']
    },
    lying_machine_hamstring_curls: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe'],
        description: 'Leżąc na maszynie, uginaj nogi przyciągając pięty do pośladków, a następnie powoli opuszczaj.',
        substitutes: ['tbar rdls', 'seated hamstring curl']
    },
    lying_dumbbell_hamstring_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['dwugłowe'],
        description: 'Leżąc na brzuchu, trzymaj hantel między stopami, kolana ugięte. Powoli opuszczaj hantel do ziemi, a następnie ugnij nogi z powrotem, ciągnąc pięty do pośladków.',
        substitutes: ['tbar rdls', 'seated hamstring curl']
    },
    cable_leg_adduction: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Stojąc bokiem do wyciągu dolnego, załóż opaskę na dalszą stopę i odwódź ją poziomo na zewnątrz, z dala od maszyny.',
        substitutes: ['cable kickbacks']
    },
    cable_kickbacks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Stojąc przodem do wyciągu dolnego, z opaską na kostce, wykonaj wykop nogi w tył tak daleko, jak możesz.',
        substitutes: ['cable leg adduction']
    },
    hip_thrusts: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Z plecami opartymi o ławkę (lub na ziemi), kolana ugięte 90 stopni. Wypychaj biodra w górę, broda przyciągnięta do klatki. Nie ruszając stopami, próbuj ciągnąć pięty w stronę pośladków.',
        substitutes: ['unilateral hip thrusts']
    },
    unilateral_hip_thrusts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Plecy oparte o ławkę/ziemię, jedno kolano ugięte 90 stopni (druga noga prosta). Wypychaj biodra w górę. Ciągnij piętę nogi podporowej w stronę pośladka.',
        substitutes: ['cable kickbacks']
    },
    deadlift: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['plecy', 'dwugłowe'],
        description: 'Stojąc ze sztangą nad stopami, chwyć ją nachwytem na szerokość barków. Plecy proste. Zacznij od wyprostu nóg, ciągnąc sztangę po piszczelach. Gdy minie kolana, wyprostuj tułów. Opuszczając: zacznij od cofnięcia bioder (zawias), gdy sztanga minie kolana, ugnij nogi do ziemi. Można wykonywać w wersji sumo.',
        substitutes: ['romanian deadlifts']
    },
    donkey_kicks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Jesteś osłem, na czworakach. Ktoś cię denerwuje, stojąc za tobą. Kopnij jedną nogą w tył i w górę najmocniej jak potrafisz, żeby dać nauczkę.',
        substitutes: ['cable kickbacks']
    },
    good_girls: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Na maszynie do przywodzicieli (adductor), siedząc, złączaj kolana do siebie.',
        substitutes: ['cable kickbacks']
    },
    fire_hydrants: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Na czworakach. Unoś jedną nogę w bok (jak pies przy hydrancie). Trzymaj pozostałe trzy punkty podparcia nieruchomo.',
        substitutes: ['froggy pumps']
    },
    froggy_pumps: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Leżąc na plecach, przyciągnij stopy do pośladków (złączone podeszwami), kolana szeroko (jak żaba). Wypychaj biodra w górę, napierając zewnętrznymi krawędziami stóp.',
        substitutes: ['cable kickbacks', 'fire hydrants']
    },
    bad_girls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Na maszynie do odwodzicieli (abductor) lub z gumą wokół kolan siedząc: rozpychaj kolana na zewnątrz.',
        substitutes: ['cable kickbacks']
    },
    seated_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Palce skierowane 30 stopni do wewnątrz.',
            standard: 'Stopy równolegle, na szerokość barków.',
            toes_out: 'Palce skierowane 30 stopni na zewnątrz.'
        },
        unit: 'reps', //vs duration    
        muscles: ['łydki'],
        description: 'Siedząc z obciążeniem na kolanach, wykonuj wspięcia na palce, unosząc kolana.',
        substitutes: ['standing calf raises']
    },
    standing_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Palce skierowane 30 stopni do wewnątrz.',
            standard: 'Stopy równolegle, na szerokość barków.',
            toes_out: 'Palce skierowane 30 stopni na zewnątrz.'
        },
        unit: 'reps', //vs duration    
        muscles: ['łydki'],
        description: 'Stojąc z ciężarem w rękach lub na barkach, wykonuj wspięcia na palce.',
        substitutes: ['seated calf raises']
    },
    walking_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['łydki'],
        description: 'Z ciężarkami w dłoniach, zrób 50 kroków. Przy każdym kroku wspinaj się maksymalnie na palce.',
        substitutes: ['standing calf raises']
    },
    unilateral_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Palce skierowane 30 stopni do wewnątrz.',
            standard: 'Stopa skierowana prosto.',
            toes_out: 'Palce skierowane 30 stopni na zewnątrz.'
        },
        unit: 'reps', //vs duration    
        muscles: ['łydki'],
        description: 'Wspięcia na palce na jednej nodze, ciężar na przodostopiu.',
        substitutes: ['seated calf raises']
    },
    monster_walks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['band']
        },
        unit: 'reps', //vs duration    
        muscles: ['pośladki'],
        description: 'Z gumą wokół kolan, zejdź do półprzysiadu (60 stopni). Chodź bokiem (jak krab) lub przód-tył (jak dinozaur).',
        substitutes: ['bad girls']
    },
    //arms lol
    dumbbell_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'bands']
        },
        variants: {
            hammer: 'Chwyt neutralny (młotkowy), dłonie skierowane do ciała przez cały ruch.',
            supinated: 'Utrzymuj podchwyt (supinację) przez cały ruch - dłonie do przodu/sufitu.',
            alternating: 'Zacznij chwytem neutralnym, kończąc z dłonią w supinacji (do sufitu).'
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Siedząc lub stojąc z hantlami. Uginaj ramiona (razem lub naprzemiennie) do pełnego zgięcia łokcia. Minimalizuj bujanie i pracę barków.',
        substitutes: ['hammer curls']
    },
    // dumbbell_curls: {
    //     type: 'compound',
    //     meta: {
    //         environment: 'gymhome',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['biceps'],
    //     description: 'Seated or standing with dumbbells in either hand by your side, begin the curl with dumbbells in a neutral grip, finishing with you palm supinated and facing the ceiling.',
    //     substitutes: ['dumbell supinated curls']
    // },
    // dumbbell_hammer_curls: {
    //     type: 'compound',
    //     meta: {
    //         environment: 'gymhome',
    //         level: [0, 1, 2],
    //         equipment: []
    //     },
    //     variants: {
    //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
    //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
    //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
    //     },
    //     unit: 'reps', //vs duration    
    //     muscles: ['biceps'],
    //     description: 'Maintaining a neutral grip, curl the dumbbells in an alternating fashion.',
    //     substitutes: ['dumbbell_curls']
    // },
    rope_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Używając liny (sznurów) na wyciągu dolnym, chwyć końce chwytem neutralnym. Uginaj ramiona do wewnątrz i w górę.',
        substitutes: ['dumbbell hammer curls']
    },
    spider_curl: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        variants: {
            hammer: 'Chwyt neutralny (młotkowy).',
            supinated: 'Chwyt podchwytem (supinacja).',
            alternating: 'Zacznij neutralnie, kończ z supinacją.'
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Leżąc klatką na ławce skośnej, hantle w dłoniach. Wykonuj uginanie naprzemienne (z supinacją w szczycie), lekko kierując hantle pod ławkę.',
        substitutes: ['barbell curls']
    },
    barbell_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            wide_grip: 'Chwyt 1.5 raza szerzej niż barki.',
            narrow_grip: 'Chwyt wąski (na szerokość dłoni).',
            standard: 'Chwyt na szerokość barków.'
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Trzymaj sztangę podchwytem. Uginaj ramiona, redukując pracę barków i bujanie.',
        substitutes: ['dumbbell curls']
    },
    drag_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell', 'dumbbells']
        },
        variants: {
            dumbbell: 'Wersja z hantlami.',
            barbell: 'Wersja ze sztangą, chwyt nieco szerzej niż barki.',
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Trzymając ciężar podchwytem, "ciągnij" (drag) go w górę wzdłuż tułowia, cofając łokcie w tył. Stoisz prosto. To ruch podobny do wiosłowania, ale w pionie.',
        substitutes: ['dumbbell curls']
    },
    unilateral_hammer_cable_curl: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Trzymając uchwyt wyciągu dolnego w jednej ręce, uginaj ramię w górę i do wewnątrz, kończąc dłonią na środku klatki.',
        substitutes: ['hammer curl']
    },
    preacher_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'barbell']
        },
        variants: {
            underhand: 'Sztanga prosta lub łamana, podchwyt.',
            neutral_grip: 'Hantle, chwyt neutralny.',
            overhand: 'Sztanga prosta lub łamana, nachwyt.'
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Uginanie na modlitewniku (ramiona oparte pod kątem 45 stopni). Warto zrobić mikro-pauzę na dole ruchu.',
        substitutes: ['barbell curl']
    },
    cable_bar_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['bicepsy'],
        description: 'Używając drążka na wyciągu dolnym, chwyć go podchwytem i uginaj ramiona, minimalizując ruch barków.',
        substitutes: ['dumbbell hammer curls']
    },
    tricep_rope_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Wyciąg górny. Łokcie przy tułowiu, prostuj ramiona w dół. Łokcie nieruchomo w przestrzeni. Na dole ruchu rozszerz końce liny, kierując dłonie w dół.',
        substitutes: ['bar cable pushdown']
    },
    tricep_bar_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Wyciąg górny, drążek prosty. Łokcie przy tułowiu, prostuj ramiona w dół. Łokcie nieruchomo.',
        substitutes: ['rope cable pushdown']
    },
    unilateral_cable_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            overhand: 'Użyj uchwytu, dłoń skierowana do ziemi (nachwyt).',
            neutral: 'Chwyt młotkowy.',
            underhand: 'Podchwyt (dłoń do sufitu).'
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Wyciąg górny. Łokieć przy biodrze, prostuj ramię w dół.',
        substitutes: ['rope cable pushdown']
    },
    skull_crushers: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Leżąc płasko lub na skosie, sztanga nad głową. Zegnij łokcie, opuszczając ciężar do czoła lub za głowę, a następnie wyprostuj. Łokcie wąsko.',
        substitutes: ['face press']
    },
    face_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'W pozycji plank (ręce wyżej, np. na ławce), dłonie węziej niż barki. Ugnij łokcie, opuszczając twarz do ławki, następnie wyprostuj. Łokcie prowadź wąsko pod siebie.',
        substitutes: ['overhead_skull_crushers']
    },
    overhead_skull_crusher: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell', 'dumbbell', 'bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Siedząc pionowo, ciężar (sztanga, hantel, wyciąg) za głową, łokcie w górze. Prostuj ramiona nad głowę.',
        substitutes: ['rope cable pushdown']
    },
    tricep_dip: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Dłonie na ławce za plecami, nogi wyprostowane przed sobą. Opuszczaj pośladki w dół przed ławką, łokcie wąsko skierowane w tył. Wypchnij się w górę.',
        substitutes: ['rope cable pushdown']
    },
    dumbbell_skull_crushers: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Leżąc (płasko/skos), hantle nad głową. Opuszczaj hantle po bokach czoła, a następnie wyprostuj. Zacznij chwytem neutralnym.',
        substitutes: ['face press']
    },
    diamond_pushups: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Pompki, dłonie złączone tak, by palce wskazujące i kciuki tworzyły "diament". Łokcie blisko ciała.',
        substitutes: ['face press']
    },
    unilateral_cable_push_aways: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['tricepsy'],
        description: 'Leżąc (płasko/skos), hantle nad głową. Opuszczaj hantle po bokach czoła, a następnie wyprostuj. (Uwaga: Opis w oryginale powtórzony z dumbbell skull crushers - sprawdź poprawność ćwiczenia, nazwa sugeruje odpychanie linki jednorącz).',
        substitutes: ['face press']
    },
    jack_knives: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Siedząc w pozycji V (równoważnej), nogi ugięte w górze, ręce podpierają z tyłu. Prostuj nogi i odchylaj tułów, a następnie przyciągaj kolana do klatki.',
        substitutes: ['crunches']
    },
    crunches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Leżąc płasko, kolana ugięte. Spinaj brzuch, wyobrażając sobie, że wgniatasz dolny odcinek pleców w podłogę.',
        substitutes: ['dead_bugs', 'bicycle_crunches']
    },
    l_sits: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Siedząc (nogi proste) lub w zwisie, utrzymaj nogi w górze (min. równolegle do ziemi) izometrycznie.',
        substitutes: ['banana_hold', "plank"]
    },
    russian_twists: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Siedząc, nogi ugięte w powietrzu, odchyl się o 30 stopni. Skręcaj tułów, dotykając dłońmi ziemi po obu stronach bioder.',
        substitutes: ['jack_knives']
    },
    plank: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Bądź deską. Biodra podwinięte, pośladki spięte, brzuch twardy, ciało płaskie.',
        substitutes: ['banana_hold, side_plank']
    },
    side_plank: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Podpór bokiem na przedramieniu i stopach. Ciało proste jak deska, prostopadle do ziemi.',
        substitutes: ['banana_hold', 'plank']
    },
    crunch_toes_touches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Leżąc płasko, kolana ugięte, stopy na ziemi. W lekkim spięciu brzucha dotykaj na zmianę lewą ręką lewej stopy, a prawą prawej (skłony boczne w leżeniu).',
        substitutes: ['russian_twists']
    },
    dead_bugs: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },

        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Leżąc na plecach, ręce i nogi w górze (jak martwy robak). Powoli opuszczaj przeciwną rękę i nogę do ziemi, trzymając lędźwia przyklejone do podłogi. Wróć i zmień strony.',
        substitutes: ['crunches', 'lying_leg_lifts']
    },
    lying_leg_lifts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Leżąc na plecach, unoś proste nogi do pionu i opuszczaj je, nie dotykając ziemi. Jeśli lędźwia odrywają się od podłogi, ugnij lekko kolana.',
        substitutes: ['jack_knives', 'hanging_knee_raises']
    },
    hanging_knee_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'W zwisie na drążku, unoś kolana w górę, podwijając miednicę (celuj kolanami w czoło). Opuszczaj powoli, unikając bujania.',
        substitutes: ['lying_leg_lifts', 'v_crunches']
    },
    mountain_climbers: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'W pozycji pompki, przyciągaj naprzemiennie kolana do łokci. Nie pozwalaj biodrom opadać.',
        substitutes: ['plank', 'kneeling_cable_crunch']
    },
    kneeling_cable_crunch: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Klęcząc tyłem do wyciągu górnego, trzymaj linę przy głowie. Wykonuj skłony ("allachy"), przyciągając głowę do ziemi i garbiąc plecy.',
        substitutes: ['jack_knives', 'dead_bug']
    },
    bicycle_crunches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['brzuch'],
        description: 'Leżąc, dłonie przy głowie, nogi w górze ugięte. Przyciągaj lewy łokieć do prawego kolana, prostując lewą nogę. Zmieniaj strony płynnie (rowerek).',
        substitutes: ['dead_bugs', 'hanging_knee_raises']
    },
    banana_hold: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'duration', //vs duration    
        muscles: ['brzuch'],
        description: 'Leżąc na plecach, zrób z ciała "banana". Lędźwia wbite w ziemię, nogi uniesione nisko (30 stopni), ręce wyciągnięte za głową w powietrzu. Trzymaj pozycję.',
        substitutes: ['plank', 'leg_lifts']
    }
}




// module.exports = { tempos, workouts, exercises, schemes }
//info page
//tempos
//rep ranges
//warmup