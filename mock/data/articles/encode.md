### 原码、反码、补码

这三种编码方式主要用于表示和处理有符号的整数。

#### 1. 原码 (Signed Magnitude)
原码直接将整数的绝对值按照二进制形式表示，最左边的位用作符号位（0表示正，1表示负）。例如，对于8位二进制：
- +5 的原码为：`0000 0101`
- -5 的原码为：`1000 0101`

原码的优点是易于理解和表示，但在进行算术运算时会较为复杂，特别是加法和减法，因为正负数直接相加通常不会得到正确的结果，而且存在+0和-0两种表示方式。

#### 2. 反码 (Ones' Complement)
反码用来改进原码的运算问题，它对正数保持不变，对负数进行按位取反（符号位除外）：
- +5 的反码仍为：`0000 0101`
- -5 的反码为：`1111 1010`

反码的引入使得负数的加法运算变得更为直观，因为当两个数相加的时候，包括符号位在内的全1结果（例如在8位系统中的`1111 1111`）表示为-0，但是反码的问题在于-0和+0两种表示方法的存在，这在某些系统中会导致问题。

#### 3. 补码 (Two's Complement)
补码是目前计算机中广泛使用的方法，它对正数保持不变，负数则是取反后加1：
- +5 的补码是：`0000 0101`
- -5 的补码是：`1111 1011`

补码的引入有效解决了-0的问题（因为-0和+0的补码相同），并简化了加法和减法运算，因为不需要考虑数的符号即可直接运算。补码同样允许更简单的乘法和除法硬件实现。

### Float类型的存储方式（IEEE 754标准）

#### 结构
浮点数在计算机中的存储结构包括三部分：符号位、指数位、尾数位。
- **符号位**：1位，决定了数的正负。
- **指数位**：通常情况下，单精度浮点数（32位）有8位指数，双精度（64位）有11位指数。
- **尾数位**：单精度中有23位，双精度中有52位。

#### 存储过程
1. **规格化的表示**：大多数数会被规格化，意味着尾数部分可以被调整使得它的第一位总是1（但不存储这一位）。因此，实际上存储的是尾数的一部分，这使得可以增加存储的有效数字。
2. **指数的偏移表示**：为了能表示正负指数，IEEE标准采用了偏移量的方法。例如，在32位浮点数中，指数偏移量是127，所以实际的指数等于存储的指数值减去127。

这种表示方式允许浮点数在有限的存储空间中表示非常大范围的数值，同时也保留了相对合理的精度。然而，这也导致了一些问题，如精度损失和舍入误差，特别是在进行大量浮点运算时。这些问题需要在软件设计和工程实践中特别注意。