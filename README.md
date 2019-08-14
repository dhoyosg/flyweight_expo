# Patrón de diseño Flyweight
Consiste en diseñar objetos hasta los niveles mas bajos de "granularidad". El sistema proporciona una flexibilidad óptima, pero puede ser bastante costoso en términos de rendimiento y uso de memoria

Este patron describe como compartir objetos para permitir su uso en forma de granularidad fina. sin un costo prohibitivo.
Cada objeto flyweight está dividido en dos piezas: El estado dependiente (Extrínseco) y el estado-independiente (Intrinseco). El estado intrinseco es almacenado y compartido en el objeto Flyweight. La parte extrinseca es guardada o almacenada por los objetos de tipo clientes y son pasadas al objeto flyweight cuando sun operaciones son invocadas

## ¿En qué consiste?
-Representar un gran número de objetos
similares mediante un objeto intermedio

-Posee dos partes, la parte Intrínseca (Elementos
que se puedan compartir o son comunes) y la
parte extrínseca (Elementos que son particulares
para cada tipo)

-Los flyweights son creados y almacenados en una 
fábrica.

## Estructura 
Las copias flyweight se almacenan en el repositorio de una fábrica. El cliente se abstiene de crear flyweights directamente y los solicita a la fábrica. Cada peso mosca no puede sostenerse pos si solo. Cualquier atributo que haga imposible el compartir, debe ser proporcionado por el cliente, siempre que se haga la solicitud al flywheight

## ¿Como aplicarlo?

1.Comprobar que el rendimiento en los objetos es un tema primordial.

2.Divida el objeto principal en los dos estados Intrínseco y extrínseco

3.Elimine el estado extrínseco de los atributos de clase y agreguelos a la lista de
argumentos de llamada en los métodos que se vean afectados

4.Cree una fábrica que pueda almacenar en caché y reutilizar las instancias de las
clases ya existentes

5.El cliente debe usar la fábrica en vez del operador new.

6.El cliente o un tercero debe revisar los estados extrínsecos y reemplazar dichos
estados a métodos de clase

