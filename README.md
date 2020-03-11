#### Non-interactive scope +30
[x] Данные отображаются в таблице в соответствии с функциональными требованиями. +30

#### Basic scope +70
[x] Реализована сортировка по одной колонке. +10

[x] Понятная индикация, по какой колонке применена сортировка и в каком направлении (по возрастанию или убыванию) +10

[x] Реализована фильтрация по введённому тексту (поиск подстроки как минимум в значениях одной колонки). +10

[x] (В дополнение к предыдущему) При фильтрации по тексту производится поиск подстроки в нескольких колонках. +10

[x] Реализована фильтрация по boolean колонке с помощью UI-элемента toggle иди аналогичного. +10

[ ] Реализована фильтрация по enum колонке. Можно использовать react-select или аналогичный UI-элемент. +10

[ ] (В дополнение к предыдущему) При фильтрации по enum колонке можно выбрать несколько значений (multiselect UI-элемент). +10

#### Advanced scope +150
[ ] С зажатым shift можно сортировать по нескольким колонкам. +20

[ ] Реализована виртуализация рядов для отображении большого объёма данных. +30.

[ ] Функцию виртуализации можно выключить c помощью toggle и сравнить скорость работы и отрисовки страницы. +10

[x] Ряд таблицы можно выделить кликом и применить к нему какое-либо действие. Выделенный ряд должен отличатся визуально. Самый простой пример действия - удаление из таблицы, но можно придумать любое другое. +20

[ ] (В дополнение к предыдущему) С помощью зажатых Ctrl/shift и/или колонки чекбоксов слева можно выделить одновременно несколько рядов и применить к ним действие. +20

[x] Можно настраивать видимость колонок (всех или некоторых) +20

[x] Фиксированный заголовок таблицы aka sticky header, то есть при скролле таблицы строка с названиями колонок остаётся видна поверх данных. +10

[X] Фиксированная левая колонка. Принцип тот же, что и для sticky header, но левая колонка (как правило идентифицирующая данные в ряде, например - имя человека) остаётся видна при горизонтальном скролле. +20

#### Hacker scope +50

[x] Сохранение значений для сортировки, фильтрации, видимости колонок (если реализовано) сохранаются в localStorage так, что при обновлении страницы состояние таблицы сохраняется. +20

[x] Экспорт данных в CSV файл (только видимые ряды с сохранением сортировки). +20

[ ] Значения фильтров для текстовых и enum колонок можно передавать в querystring (приоритет выше, чем у localStorage). +10