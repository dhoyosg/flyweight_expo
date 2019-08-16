# Mónada (programación funcional)

## ¿Qué es?

En programación funcional, la monada representa un patrón de diseño que permite estructurar programas genéricamente mientras se automatiza el código repetitivo que necesita la lógica.
Las monadas logran esto proporcionando su propio tipo de datos, los cuales representan una forma específica de cálculo junto con un procedimiento para ajustar los valores de cualquier tipo básico en la monada

Las monadas representan “contexto”, por ejemplo, cuando se está sentado en el sofá de la casa, cuando se está conduciendo, cuando se está buceando en el mar, etc.
Ej: 
dormirLaSiesta :: Sofá ()
dormirLaSiesta = ...

regresarAlFuturo :: DeLoreanDMC12 ()
regresarAlFuturo = ...

brazada :: Buceando ()
brazada = ...
Son seguras de usar, ya que no habría problema si por ejemplo usted se queda dormido en el sofá, pero sería desasttroso si usted se queda dormido en el coche o mientras bucea
irAlPueblo :: DeLoreanDMC12 ()
irAlPueblo = do
                ...
                encenderMotor
                meterPrimera
                acelerar
                dormirLaSiesta        -- por fortuna no compila
                ...

