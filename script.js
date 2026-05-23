// ============================================================
// БАЗА ДАННЫХ — МЕДИЦИНСКАЯ ХИМИЯ (~140 вопросов из файла)
// ============================================================
const ALL_QUESTIONS = [
    { q: "Укажите группы микробиогенных элементов по их содержанию в организме человека:", a: ["Микробиогенные — более 0,01%","Олигобиогенные — 0,01% -- 1%","Макробиогенные — менее 1%","Микробиогенные — менее 0,1%"], c: 3 },
    { q: "Укажите патологические состояния, связанные с избытком молибдена:", a: ["Избыток мочевой кислоты в моче","Развитие болезни Боткина","Нарушение обмена аминокислот","Избыточное образование линолевой кислоты"], c: 0 },
    { q: "Заболевание, возникающее при изменении содержания меди (Cu) в организме:", a: ["Снижение солей Cu приводит к отравлению","Повышение Cu вызывает анемию","Дефицит Cu вызывает болезнь Вильсона","Дефицит Cu вызывает анемию"], c: 3 },
    { q: "Фактор, от которого зависит координационное число комплексообразователя:", a: ["Атомный радиус комплексообразователя","Радиус иона","Поляризуемость","Энергия ионизации"], c: 0 },
    { q: "Фактор, от которого зависит координационное число комплексообразователя (2):", a: ["Энергия ионизации","Электронная структура лиганда","Радиус иона","Поляризуемость"], c: 2 },
    { q: "Заряд комплексных ионов в соединениях [Cu(NH₃)₄]SO₄ и [Pt(NH₃)₂Cl₂]:", a: ["+4; 0","+3; 0","+2; 0","2; +2"], c: 2 },
    { q: "Тип комплексов в Na₃[Co(NO₂)₆], K₂[CuCl₄]:", a: ["Аквакомплексы","Ацидокомплексы","Внутрикомплексные соединения","Катионные комплексы"], c: 1 },
    { q: "Абсорбция — это:", a: ["Изменение концентрации вещества на поверхности адсорбента","Поглощение с образованием химической связи","Процесс, начинающийся внутри адсорбента","Процесс, не связанный с распределением вещества"], c: 0 },
    { q: "Хемосорбция — это:", a: ["Поглощение с образованием химической связи между адсорбтивом и адсорбентом","Адсорбция, распространяющаяся вглубь","Процесс, не связанный с распространением вещества","Адсорбция, не переходящая в глубинные слои"], c: 0 },
    { q: "Пример избирательной адсорбции:", a: ["Отсутствие адсорбции активных центров ферментов","Адсорбция потенциал-определяющих ионов на ядре коллоидных частиц","Адсорбция ионов в клетках","Поглощение кислорода кровью"], c: 1 },
    { q: "Раствор — это:", a: ["смесь веществ с чёткой границей раздела","однородная система из растворителя и растворённого вещества","только жидкость","вещество с кристаллической решёткой"], c: 1 },
    { q: "Растворитель — это вещество, которое:", a: ["находится в меньшем количестве","растворяется","в процессе не меняет агрегатное состояние","всегда вода"], c: 2 },
    { q: "Растворённое вещество — это:", a: ["вещество в большем количестве","вещество, которое растворяет","вещество в меньшем количестве","газ"], c: 2 },
    { q: "Какой раствор называется насыщенным?", a: ["содержит мало вещества","содержит максимально возможное количество вещества при данной температуре","не содержит растворённого вещества","всегда горячий"], c: 1 },
    { q: "Концентрация раствора — это:", a: ["масса растворителя","количество растворённого вещества в определённом количестве раствора или растворителя","объём вещества","плотность раствора"], c: 1 },
    { q: "Массовая доля вещества вычисляется по формуле:", a: ["ω = m(раствора) / m(вещества)","ω = m(вещества) / m(раствора)","ω = V / m","ω = n / V"], c: 1 },
    { q: "Молярная концентрация (молярность) — это:", a: ["масса вещества в 1 л раствора","количество вещества (моль) в 1 литре раствора","объём растворителя","плотность"], c: 1 },
    { q: "В каких единицах измеряется молярность?", a: ["г/л","%","моль/л","кг"], c: 2 },
    { q: "При добавлении растворённого вещества температура кипения:", a: ["понижается","повышается","не изменяется","сначала падает, потом растёт"], c: 1 },
    { q: "Температура замерзания раствора по сравнению с чистым растворителем:", a: ["выше","ниже","такая же","равна нулю"], c: 1 },
    { q: "Коллигативные свойства зависят от:", a: ["природы растворённого вещества","количества частиц растворённого вещества","температуры растворителя","давления"], c: 1 },
    { q: "К коллигативным свойствам не относится:", a: ["понижение давления пара","повышение температуры кипения","плотность раствора","понижение температуры замерзания"], c: 2 },
    { q: "При растворении электролита (например NaCl) число частиц:", a: ["уменьшается","не изменяется","увеличивается","становится равным нулю"], c: 2 },
    { q: "Буферный раствор — это:", a: ["раствор, который не проводит электрический ток","раствор, поддерживающий постоянный pH при добавлении небольшого количества кислоты или основания","любой водный раствор","насыщенный раствор"], c: 1 },
    { q: "Буфер обычно состоит из:", a: ["сильной кислоты и сильного основания","слабой кислоты и её соли (с сильным основанием)","только воды","газа и жидкости"], c: 1 },
    { q: "Какой из растворов является буферным?", a: ["HCl + NaCl","NaOH + NaCl","CH₃COOH + CH₃COONa","H₂SO₄ + H₂O"], c: 2 },
    { q: "При добавлении небольшого количества кислоты в буфер:", a: ["pH резко уменьшается","pH почти не изменяется","раствор закипает","раствор исчезает"], c: 1 },
    { q: "Основной буфер крови:", a: ["фосфатный","белковый","гидрокарбонатный","аммиачный"], c: 1 },
    { q: "Гидрокарбонатный буфер включает:", a: ["HCl и NaCl","H₂CO₃ и HCO₃⁻","NH₃ и NH₄⁺","H₂SO₄ + H₂O"], c: 1 },
    { q: "Размер частиц в коллоидных системах примерно равен:", a: ["менее 1 нм","1–100 нм","более 1000 нм","1 мм"], c: 1 },
    { q: "Какое явление характерно для коллоидов?", a: ["диффузия","осмос","эффект Тиндаля","электролиз"], c: 2 },
    { q: "Что произойдёт при пропускании света через коллоидный раствор?", a: ["свет полностью проходит","свет не проходит","видим световой конус","свет поглощается полностью"], c: 2 },
    { q: "Коллоидные растворы получают методами:", a: ["фильтрации","диспергирования и конденсации","испарения","кристаллизации"], c: 1 },
    { q: "Диспергирование — это:", a: ["укрупнение частиц","растворение вещества","измельчение крупных частиц до коллоидных размеров","осаждение вещества"], c: 2 },
    { q: "Конденсация — это:", a: ["объединение молекул или ионов в более крупные частицы","испарение жидкости","охлаждение газа","фильтрация"], c: 0 },
    { q: "Какой метод используют для очистки коллоидов от ионов?", a: ["фильтрация","дистилляция","диализ","выпаривание"], c: 2 },
    { q: "Коагуляция — это:", a: ["растворение вещества","слипание (агрегация) коллоидных частиц с образованием осадка","испарение жидкости","фильтрация раствора"], c: 1 },
    { q: "Основная причина устойчивости коллоидов:", a: ["высокая температура","электрический заряд частиц","давление","цвет раствора"], c: 1 },
    { q: "Что вызывает коагуляцию?", a: ["добавление электролита","нагревание","охлаждение","все ответы правильные"], c: 3 },
    { q: "Какой ион наиболее эффективно вызывает коагуляцию отрицательно заряженного золя?", a: ["Na⁺","K⁺","Al³⁺","H⁺"], c: 2 },
    { q: "Гетерофункциональными называют органические соединения, которые:", a: ["содержат только одну функциональную группу","содержат две и более одинаковые функциональные группы","содержат две и более различные функциональные группы","не содержат функциональных групп"], c: 2 },
    { q: "К гетерофункциональным соединениям относится:", a: ["этанол","уксусная кислота","димедрол","этилен"], c: 2 },
    { q: "Какие функциональные группы входят в состав аминоспиртов?", a: ["–OH и –CHO","–COOH и –NH₂","–COOH и –OH","–NH₂ и –ОН"], c: 3 },
    { q: "Соединение HO–CH₂–COOH относится к классу:", a: ["спиртов","альдегидов","гидроксикислот","аминов"], c: 2 },
    { q: "Гидроксикислоты — это органические соединения, содержащие:", a: ["только карбоксильную группу","альдегидную и карбоксильную группы","карбоксильную и гидроксильную группы","карбонильную и аминогруппу"], c: 2 },
    { q: "Функциональные группы, входящие в состав оксикислот:", a: ["–COOH и –OH","–COOH и =O","–OH и –CHO","–COOH и –NH₂"], c: 0 },
    { q: "Соединение CH₃–CH(OH)–COOH называется:", a: ["уксусная кислота","яблочная кислота","молочная кислота","гликолевая кислота"], c: 3 },
    { q: "Гетерофункциональные производные бензола — это соединения, содержащие:", a: ["только углеводородные группы","бензольное кольцо и функциональные группы","две или более разных функциональных групп","только одну функциональную группу"], c: 1 },
    { q: "Парацетамол относится к производным:", a: ["бензойной кислоты","фенола и анилина","этанола","углеводов"], c: 1 },
    { q: "Какая группа характерна для аминобензойной кислоты?", a: ["–NH₂ и –COOH","–OH и –COOH","–CHO","–COO–"], c: 0 },
    { q: "Какая группа характерна для салициловой кислоты?", a: ["–NH₂","–OH и –COOH","–CHO","–COO–"], c: 1 },
    { q: "Основное действие аспирина (ацетилсалициловой кислоты):", a: ["антибиотическое","обезболивающее, противовоспалительное","гормональное","снотворное"], c: 1 },
    { q: "Гетероциклические соединения — это:", a: ["соединения только с углеродом","циклические соединения, содержащие кроме углерода другие атомы (N, O, S)","только ароматические углеводороды","соли органических кислот"], c: 1 },
    { q: "Пятичленные гетероциклы — это соединения, содержащие:", a: ["5 атомов углерода","5 атомов в кольце, среди которых есть гетероатомы","только кислород","только ароматические кольца"], c: 1 },
    { q: "Какой из перечисленных является пятичленным гетероциклом с азотом?", a: ["бензол","пиррол","циклогексан","толуол"], c: 1 },
    { q: "Фуран содержит гетероатом:", a: ["N","S","O","Cl"], c: 2 },
    { q: "Какое соединение относится к пятичленным гетероциклам с двумя гетероатомами?", a: ["Пиридин","Фуран","Пиразол","Бензол"], c: 2 },
    { q: "Какие производные пиразола не применяется в медицине?", a: ["Аналгин","амидопирин","Антипирин","Алкоксин"], c: 3 },
    { q: "Какое соединение относится к шестичленным гетероциклам?", a: ["Пиррол","Пиридин","Фуран","Тиофен"], c: 1 },
    { q: "Пиримидин содержит:", a: ["1 атом азота","2 атома азота","3 атома азота","1 атом кислорода"], c: 1 },
    { q: "Аминокислоты — это органические соединения, содержащие:", a: ["только карбоксильную группу","только аминогруппу","аминогруппу и карбоксильную группу","гидроксильную группу"], c: 2 },
    { q: "Общая формула α-аминокислот:", a: ["R–COOH","NH₂–CH₂–COOH","R–CH(NH₂)–COOH","R–NH₂"], c: 2 },
    { q: "Незаменимые аминокислоты — это те, которые:", a: ["не содержат азот","синтезируются только в лаборатории","не синтезируются в организме человека","входят только в растительные белки"], c: 2 },
    { q: "Заменяемые аминокислоты — это те, которые:", a: ["не содержат азот","синтезируются только в лаборатории","синтезируются в организме человека в достаточном количестве","входят только в растительные белки"], c: 2 },
    { q: "Аминокислоты проявляют свойства:", a: ["только кислотные","только основные","амфотерные","нейтральные"], c: 2 },
    { q: "При взаимодействии аминокислот с кислотами они ведут себя как:", a: ["кислоты","основания","соли","оксиды"], c: 1 },
    { q: "Пептидная связь образуется между:", a: ["двумя карбоксильными группами","аминогруппой и карбоксильной группой","двумя аминогруппами","радикалами"], c: 1 },
    { q: "Белки образуются в результате:", a: ["гидролиза аминокислот","полимеризации аминокислот","окисления аминокислот","нейтрализации"], c: 1 },
    { q: "Белки обладают свойством:", a: ["только кислотным","только основным","амфотерным","нейтральным"], c: 2 },
    { q: "Осаждение белков может происходить под действием:", a: ["спирта","воды","кислорода","азота"], c: 0 },
    { q: "Денатурация белка — это:", a: ["образование новых аминокислот","разрушение первичной структуры","изменение пространственной структуры","синтез белка"], c: 2 },
    { q: "Факторами денатурации не являются:", a: ["высокая температура","кислоты и щёлочи","соли тяжёлых металлов","глюкоза"], c: 3 },
    { q: "При денатурации чаще всего:", a: ["сохраняется биологическая активность","белок теряет свою функцию","увеличивается растворимость","образуются жиры"], c: 1 },
    { q: "Ренатурация — это:", a: ["полное разрушение белка","восстановление структуры белка","распад на глюкозу","образование аминокислот"], c: 1 },
    { q: "Нуклеиновые основания входят в состав:", a: ["белков","липидов","нуклеиновых кислот","углеводов"], c: 2 },
    { q: "Азотистые основания делятся на:", a: ["простые и сложные","кислые и щелочные","пуриновые и пиримидиновые","альдегидные и кетонные"], c: 2 },
    { q: "К пуриновым основаниям относятся:", a: ["тимин и урацил","аденин и гуанин","цитозин и тимин","урацил и цитозин"], c: 1 },
    { q: "К пиримидиновым основаниям относятся:", a: ["аденин и гуанин","аденин и цитозин","цитозин, тимин, урацил","гуанин и урацил"], c: 2 },
    { q: "Сахар, входящий в состав ДНК, — это:", a: ["глюкоза","рибоза","дезоксирибоза","фруктоза"], c: 2 },
    { q: "Сахар, входящий в состав РНК, — это:", a: ["дезоксирибоза","рибоза","глюкоза","сахароза"], c: 1 },
    { q: "В ДНК НЕ входит:", a: ["аденин","гуанин","урацил","тимин"], c: 2 },
    { q: "В РНК вместо тимина содержится:", a: ["аденин","гуанин","урацил","цитозин"], c: 2 },
    { q: "Нуклеозид — это соединение, состоящее из:", a: ["азотистого основания и фосфорной кислоты","азотистого основания и сахара","сахара и аминокислоты","сахара и жира"], c: 1 },
    { q: "Нуклеотид состоит из:", a: ["азотистого основания и воды","сахара и фосфорной кислоты","азотистого основания, сахара и фосфатной группы","только азотистого основания"], c: 2 },
    { q: "Нуклеозид отличается от нуклеотида отсутствием:", a: ["сахара","азотистого основания","фосфатной группы","углерода"], c: 2 },
    { q: "Нуклеотиды являются мономерами:", a: ["белков","липидов","нуклеиновых кислот","углеводов"], c: 2 },
    { q: "Фосфатная группа в нуклеотиде обеспечивает:", a: ["цвет молекулы","соединение нуклеотидов в цепь","распад белков","синтез жиров"], c: 1 },
    { q: "Комплементарность означает:", a: ["случайное соединение оснований","строгое соответствие пар оснований (A–T, G–C)","соединение белков","образование жиров"], c: 1 },
    { q: "Репликация ДНК — это процесс:", a: ["синтеза белка","удвоения молекулы ДНК","распада РНК","образования липидов"], c: 1 },
    { q: "В результате репликации образуются:", a: ["две одинаковые молекулы ДНК","одна молекула РНК","белковая цепь","аминокислоты"], c: 0 },
    { q: "Денатурация ДНК — это:", a: ["синтез новой ДНК","восстановление структуры ДНК","разрушение водородных связей и расплетение двойной спирали","образование белков"], c: 2 },
    { q: "При денатурации ДНК в первую очередь разрываются:", a: ["ковалентные связи в цепи","пептидные связи","водородные связи между основаниями","ионные связи в белках"], c: 2 },
    { q: "Обратный процесс денатурации ДНК называется:", a: ["репликация","ренативация","деструкция","химизация"], c: 1 },
    { q: "Основная функция углеводов в организме:", a: ["строительная","энергетическая","все ответы правильные","защитная"], c: 2 },
    { q: "При расщеплении углеводов выделяется:", a: ["кислород","энергия АТФ","углекислый газ только","аминокислоты"], c: 1 },
    { q: "Главный источник энергии для клеток:", a: ["белки","жиры","углеводы","витамины"], c: 2 },
    { q: "Запасной углевод в организме человека:", a: ["крахмал","целлюлоза","гликоген","глюкоза"], c: 2 },
    { q: "Гликоген в основном запасается в:", a: ["костях и коже","печени и мышцах","лёгких","сердце и мозге только"], c: 1 },
    { q: "Специфическая функция углеводов проявляется в:", a: ["образовании клеточных стенок у растений (целлюлоза)","синтезе гормонов","образовании ферментов","передаче нервных импульсов"], c: 0 },
    { q: "Простой углевод:", a: ["крахмал","гликоген","глицеральдегид","целлюлоза"], c: 2 },
    { q: "Моносахариды — это:", a: ["сложные углеводы","простейшие углеводы","белки","жиры"], c: 1 },
    { q: "В циклическую форму чаще всего переходят:", a: ["только белки","моносахариды","липиды","нуклеотиды"], c: 1 },
    { q: "Дисахариды — это углеводы, состоящие из:", a: ["одного моносахарида","двух моносахаридов","трёх аминокислот","многих нуклеотидов"], c: 1 },
    { q: "Пример дисахарида:", a: ["глюкоза","фруктоза","сахароза","гликоген"], c: 2 },
    { q: "Гидролиз дисахаридов приводит к образованию:", a: ["аминокислот","моносахаридов","жирных кислот","нуклеотидов"], c: 1 },
    { q: "Полисахариды — это:", a: ["низкомолекулярные вещества","соединения из множества моносахаридов","аминокислоты","жиры"], c: 1 },
    { q: "К полисахаридам относится:", a: ["сахароза","лактоза","глюкоза","крахмал"], c: 3 },
    { q: "Основная функция крахмала:", a: ["структурная у животных","запасная у растений","транспортная","каталитическая"], c: 1 },
    { q: "Целлюлоза входит в состав:", a: ["клеточной стенки растений","крови человека","мышц животных","ДНК"], c: 0 },
    { q: "Гетерополисахариды — это:", a: ["углеводы из одинаковых мономеров","углеводы из разных моносахаридов","белки","липиды"], c: 1 },
    { q: "В отличие от гомополисахаридов, гетерополисахариды:", a: ["состоят из одного типа сахара","не содержат углерода","включают разные виды моносахаридов","не растворяются в воде"], c: 2 },
    { q: "К гетерополисахаридам относится:", a: ["крахмал","гликоген","гиалуроновая кислота","целлюлоза"], c: 2 },
    { q: "Гликозаминогликаны — это:", a: ["белки","разновидность гетерополисахаридов","жиры","нуклеотиды"], c: 1 },
    { q: "Основная функция гетерополисахаридов:", a: ["энергетическая","структурная и защитная","каталитическая","гормональная"], c: 1 },
    { q: "Гетерополисахариды часто входят в состав:", a: ["жиров","нуклеиновых кислот","соединительной ткани","витаминов"], c: 2 },
    { q: "Липиды — это:", a: ["водонерастворимые вещества","гидрофобные органические соединения","белки","углеводы"], c: 0 },
    { q: "Омыляемые липиды — это липиды, которые:", a: ["не содержат кислород","способны гидролизоваться с образованием мыла","растворяются в воде","не реагируют со щелочами"], c: 1 },
    { q: "Неомыляемые липиды:", a: ["дают мыло при гидролизе","не гидролизуются с образованием мыла","состоят из глицерина","являются белками"], c: 1 },
    { q: "К омыляемым липидам относятся:", a: ["стероиды","триглицериды","витамины","холестерин"], c: 1 },
    { q: "Реакция омыления — это", a: ["окисление липидов","гидролиз жиров","восстановление белков","синтез углеводов"], c: 1 },
    { q: "Продукты омыления жиров:", a: ["аминокислоты","глицерин и соли жирных кислот","глюкоза и вода","нуклеотиды"], c: 1 },
    { q: "Жиры состоят из:", a: ["аминокислот","глицерина и жирных кислот","моносахаридов","нуклеотидов"], c: 1 },
    { q: "Липиды выполняют функцию:", a: ["только энергетическую","только структурную","энергетическую и структурную","только информационную"], c: 2 },
    { q: "Сложные липиды — это:", a: ["липиды, состоящие только из жирных кислот","липиды, содержащие дополнительные группы (фосфат, углеводы и др.)","только углеводы","только белки"], c: 1 },
    { q: "К сложным липидам относятся:", a: ["триглицериды","воски","фосфолипиды","стероиды"], c: 2 },
    { q: "При гидролизе сложных липидов образуются:", a: ["только глицерин и жирные кислоты","глицерин, жирные кислоты и дополнительные компоненты (например, фосфат)","только глюкоза","аминокислоты"], c: 1 },
    { q: "Фосфолипиды входят в состав:", a: ["костей","клеточных мембран","крови","ДНК"], c: 1 },
    { q: "Гликолипиды содержат:", a: ["только жирные кислоты","белки","углеводный компонент","нуклеотиды"], c: 2 },
    { q: "Неомыляемые липиды — это:", a: ["липиды, содержащие эфирные связи","липиды, которые гидролизуются в щелочной среде","липиды, не образующие мыла при гидролизе","белки"], c: 2 },
    { q: "Неомыляемые липиды:", a: ["содержат жирные кислоты","не содержат жирных кислот","состоят из аминокислот","являются углеводами"], c: 1 },
    { q: "К неомыляемым липидам относятся:", a: ["триглицериды","фосфолипиды","стероиды","воски"], c: 2 },
    { q: "Неомыляемые липиды участвуют в:", a: ["образовании гормонов","синтезе углеводов","переваривании белков","образовании ДНК"], c: 0 },
    { q: "К неомыляемым липидам относится:", a: ["холестерин","крахмал","белок","гликоген"], c: 0 },
    { q: "Основой строения стероидов является:", a: ["глицерин","жирные кислоты","стеран","глюкоза"], c: 2 },
    { q: "Молекула стерана содержит сколько атомов углерода присоединенных к циклопентановому кольцу?", a: ["восемь","десять","пятнадцать","семнадцать"], c: 0 },
    { q: "Стерины являются оксипроизводными:", a: ["терпенов","пинанов","холестерина","фенантрена"], c: 2 },
    { q: "Основная часть холестерина в организме используется для:", a: ["построения биомембран","синтеза желчи","образования катехоламинов","синтеза ретинола"], c: 1 },
    { q: "Основная функция желчных кислот в организме:", a: ["энергетическая","эмульгирующая","каталитическая","стабилизирующая"], c: 1 },
];

// ============================================================
// ЛОГИКА ТЕСТА (полностью сохранена — таймер, история, ошибки)
// ============================================================
let currentSession = {
    questionsList: [],
    originalQuestions: [],
    wrongQuestions: [],
    currentIndex: 0,
    score: 0,
    timerInterval: null,
    timeLeft: 30,
    active: false,
    userAnswers: [],
    isAnswered: false
};

let lastUsedIndices = JSON.parse(localStorage.getItem('lastQuestionIndicesMedChem') || '[]');

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function shuffleQuestionOptions(question) {
    const newOptions = [...question.a];
    const correctText = question.a[question.c];
    const shuffledIndices = shuffleArray([0, 1, 2, 3]);
    const newAnswers = shuffledIndices.map(i => newOptions[i]);
    const newCorrectIndex = newAnswers.findIndex(txt => txt === correctText);
    return { text: question.q, answers: newAnswers, correct: newCorrectIndex };
}

function getRandomQuestions(count) {
    const total = ALL_QUESTIONS.length;
    let available = [...Array(total).keys()].filter(i => !lastUsedIndices.includes(i));
    if (available.length < count) available = [...Array(total).keys()];
    const selected = [];
    for (let i = 0; i < count; i++) {
        const rand = Math.floor(Math.random() * available.length);
        selected.push(available[rand]);
        available.splice(rand, 1);
    }
    lastUsedIndices = lastUsedIndices.concat(selected).slice(-60);
    localStorage.setItem('lastQuestionIndicesMedChem', JSON.stringify(lastUsedIndices));
    return selected.map(idx => ({ ...ALL_QUESTIONS[idx] }));
}

function prepareSessionFromQuestions(originalQuestions) {
    return originalQuestions.map(q => shuffleQuestionOptions(q));
}

const startScreen = document.getElementById('startScreen');
const quizDiv = document.getElementById('quizScreen');
const resultDiv = document.getElementById('resultScreen');
const qText = document.getElementById('qText');
const answersDiv = document.getElementById('answersContainer');
const qNumSpan = document.getElementById('qNum');
const progressFill = document.getElementById('progressFill');
const timerSecondsSpan = document.getElementById('timerSeconds');
const timerCircleFill = document.querySelector('#timerRing .fill');
const exitBtn = document.getElementById('floatingExitBtn');
const exitModal = document.getElementById('exitModal');
const historyBtn = document.getElementById('historyBtn');
const historyModal = document.getElementById('historyModal');
const errorsModal = document.getElementById('errorsModal');
const errorsListDiv = document.getElementById('errorsList');

const circumference = 2 * Math.PI * 30;

function updateTimerUI(seconds) {
    timerSecondsSpan.innerText = seconds;
    const offset = circumference - (seconds / 30) * circumference;
    timerCircleFill.style.strokeDashoffset = offset;
}

function stopTimer() {
    if (currentSession.timerInterval) clearInterval(currentSession.timerInterval);
}

function startTimer() {
    stopTimer();
    currentSession.timeLeft = 30;
    updateTimerUI(30);
    currentSession.timerInterval = setInterval(() => {
        if (!currentSession.active) return;
        if (currentSession.timeLeft <= 1) {
            stopTimer();
            handleTimeout();
        } else {
            currentSession.timeLeft--;
            updateTimerUI(currentSession.timeLeft);
        }
    }, 1000);
}

function handleTimeout() {
    if (!currentSession.active || currentSession.isAnswered) return;
    currentSession.isAnswered = true;
    const originalQ = currentSession.originalQuestions[currentSession.currentIndex];
    currentSession.userAnswers.push({
        correct: false,
        selected: -1,
        questionIndex: currentSession.currentIndex,
        userAnswerText: "⏰ Время вышло",
        correctAnswerText: originalQ.a[originalQ.c],
        questionText: originalQ.q,
        originalQuestion: originalQ
    });
    goToNextQuestion();
}

function renderCurrentQuestion() {
    currentSession.isAnswered = false;
    const q = currentSession.questionsList[currentSession.currentIndex];
    qText.innerText = q.text;
    qNumSpan.innerText = `ВОПРОС ${currentSession.currentIndex + 1}/${currentSession.questionsList.length}`;
    answersDiv.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.answers.forEach((ans, idx) => {
        const btn = document.createElement('div');
        btn.className = 'answer-btn';
        btn.innerHTML = `<div class="letter">${letters[idx]}</div><div>${ans}</div>`;
        btn.onclick = () => handleAnswer(idx, ans);
        answersDiv.appendChild(btn);
    });
    progressFill.style.width = `${(currentSession.currentIndex / currentSession.questionsList.length) * 100}%`;
    startTimer();
}

function handleAnswer(selectedIdx, selectedText) {
    if (!currentSession.active || currentSession.isAnswered) return;
    currentSession.isAnswered = true;
    stopTimer();
    const currentQ = currentSession.questionsList[currentSession.currentIndex];
    const originalQ = currentSession.originalQuestions[currentSession.currentIndex];
    const isCorrect = (selectedIdx === currentQ.correct);
    if (isCorrect) currentSession.score++;
    currentSession.userAnswers.push({
        correct: isCorrect,
        selected: selectedIdx,
        questionIndex: currentSession.currentIndex,
        userAnswerText: selectedText,
        correctAnswerText: originalQ.a[originalQ.c],
        questionText: originalQ.q,
        originalQuestion: originalQ
    });
    const btns = document.querySelectorAll('.answer-btn');
    if (btns[selectedIdx]) btns[selectedIdx].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && btns[currentQ.correct]) btns[currentQ.correct].classList.add('correct');
    setTimeout(() => goToNextQuestion(), 800);
}

function goToNextQuestion() {
    if (currentSession.currentIndex + 1 < currentSession.questionsList.length) {
        currentSession.currentIndex++;
        renderCurrentQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    currentSession.active = false;
    stopTimer();
    const total = currentSession.questionsList.length;
    const points = currentSession.score;
    const wrongIndices = currentSession.userAnswers.filter(a => !a.correct).map(a => a.questionIndex);
    currentSession.wrongQuestions = wrongIndices.map(idx => currentSession.originalQuestions[idx]);
    showResultScreen(points, total);
    saveToHistory(points, total, currentSession.originalQuestions.map(q => ({ ...q })));
    exitBtn.style.display = 'none';
}

function saveToHistory(score, total, originalQuestionsCopy) {
    const history = JSON.parse(localStorage.getItem('testHistoryMedChem') || '[]');
    history.unshift({
        date: new Date().toLocaleString(),
        score,
        total,
        questionIndices: originalQuestionsCopy.map(q => ALL_QUESTIONS.findIndex(orig => orig.q === q.q && orig.a[orig.c] === q.a[q.c]))
    });
    if (history.length > 20) history.pop();
    localStorage.setItem('testHistoryMedChem', JSON.stringify(history));
}

function getMotivationalMessage(score, total) {
    const percent = (score / total) * 100;
    if (percent === 100) return "🌟 Идеально! 25/25 — вы ас медицинской химии! 🌟";
    if (percent >= 90) return "🏆 Отлично! Вы прекрасно знаете химию! 🏆";
    if (percent >= 80) return "🎉 Хороший результат! Осталось немного повторить! 🎉";
    if (percent >= 64) return "👍 Неплохо, но обратите внимание на органическую химию.";
    if (percent >= 50) return "📚 Средний результат. Повторите растворы и комплексы.";
    if (percent >= 30) return "🤔 Требуется больше практики. Химия не терпит пробелов.";
    return "💀 GAME OVER 💀 Без химии — никуда. Учитесь!";
}

function showResultScreen(score, total) {
    quizDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    const message = getMotivationalMessage(score, total);
    let animClass = '';
    if (score < 12) animClass = 'gameover-burst';
    else if (score >= 20) animClass = 'heaven-glow';
    
    const wrongCount = currentSession.userAnswers.filter(a => !a.correct).length;
    resultDiv.innerHTML = `
        <div class="result-screen">
            <div class="result-score ${animClass}">${score}/${total}</div>
            <div style="margin:20px 0; font-size:1.2rem;">${message}</div>
            <div class="stats-row">
                <div class="stat-pill green"><span class="val">✅ ${score}</span><span class="lbl">ВЕРНО</span></div>
                <div class="stat-pill red"><span class="val">❌ ${total - score}</span><span class="lbl">ОШИБКИ</span></div>
            </div>
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" id="restartNewSession">🎲 Новая сессия</button>
                <button class="btn btn-ghost" id="repeatSameTest">🔄 Повторить этот тест</button>
                ${wrongCount > 0 ? '<button class="btn btn-ghost" id="studyMistakesBtn">📖 Изучить ошибки</button>' : ''}
                <button class="btn btn-ghost" id="showErrorsBtn">❌ Разбор ошибок</button>
            </div>
        </div>
    `;
    document.getElementById('restartNewSession').onclick = () => location.reload();
    document.getElementById('repeatSameTest').onclick = () => {
        const newQuestions = prepareSessionFromQuestions(currentSession.originalQuestions);
        startTestWithQuestions(newQuestions, currentSession.originalQuestions);
    };
    if (wrongCount > 0) {
        document.getElementById('studyMistakesBtn').onclick = () => {
            const wrongOriginal = currentSession.wrongQuestions;
            const wrongShuffled = prepareSessionFromQuestions(wrongOriginal);
            startTestWithQuestions(wrongShuffled, wrongOriginal);
        };
    }
    document.getElementById('showErrorsBtn').onclick = () => showErrorsModal();
}

function showErrorsModal() {
    const errors = currentSession.userAnswers.filter(a => !a.correct);
    if (errors.length === 0) {
        errorsListDiv.innerHTML = '<div style="text-align:center;">🎉 Поздравляю! Нет ошибок 🎉</div>';
    } else {
        errorsListDiv.innerHTML = errors.map((err, idx) => `
            <div class="error-item">
                <div class="error-question">${idx+1}. ${err.questionText}</div>
                <div class="error-detail">❌ Ваш ответ: ${err.userAnswerText}</div>
                <div class="error-detail">✅ Правильный ответ: ${err.correctAnswerText}</div>
            </div>
        `).join('');
    }
    errorsModal.classList.add('active');
}

function startTestWithQuestions(shuffledQuestions, originalQuestions) {
    currentSession = {
        questionsList: shuffledQuestions,
        originalQuestions: originalQuestions,
        wrongQuestions: [],
        currentIndex: 0,
        score: 0,
        active: true,
        userAnswers: [],
        isAnswered: false
    };
    startScreen.style.display = 'none';
    quizDiv.style.display = 'block';
    resultDiv.style.display = 'none';
    exitBtn.style.display = 'flex';
    renderCurrentQuestion();
}

function startNewTest() {
    const originalQuestions = getRandomQuestions(25);
    const shuffledQuestions = prepareSessionFromQuestions(originalQuestions);
    currentSession = {
        questionsList: shuffledQuestions,
        originalQuestions: originalQuestions,
        wrongQuestions: [],
        currentIndex: 0,
        score: 0,
        active: true,
        userAnswers: [],
        isAnswered: false
    };
    startScreen.style.display = 'none';
    quizDiv.style.display = 'block';
    resultDiv.style.display = 'none';
    exitBtn.style.display = 'flex';
    renderCurrentQuestion();
}

document.getElementById('startTestBtn').onclick = startNewTest;

exitBtn.onclick = () => { if (currentSession.active) exitModal.classList.add('active'); };
document.getElementById('cancelExitBtn').onclick = () => exitModal.classList.remove('active');
document.getElementById('confirmExitBtn').onclick = () => { exitModal.classList.remove('active'); location.reload(); };

historyBtn.onclick = () => {
    const hist = JSON.parse(localStorage.getItem('testHistoryMedChem') || '[]');
    const container = document.getElementById('historyList');
    if (hist.length === 0) container.innerHTML = '<div>Пока нет пройденных тестов.</div>';
    else container.innerHTML = hist.map(h => `<div class="history-item">📅 ${h.date}  —  балл: ${h.score}/${h.total}</div>`).join('');
    historyModal.classList.add('active');
};
document.getElementById('closeHistoryBtn').onclick = () => historyModal.classList.remove('active');
document.getElementById('closeErrorsBtn').onclick = () => errorsModal.classList.remove('active');
window.onclick = (e) => { if (e.target === exitModal) exitModal.classList.remove('active'); if (e.target === historyModal) historyModal.classList.remove('active'); if (e.target === errorsModal) errorsModal.classList.remove('active'); };