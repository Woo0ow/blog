编译并安装 GCC（GNU Compiler Collection）源码需要以下几个步骤。以下是详细的指南：
1. **下载并解压 GCC 源码：**
   ```sh
   wget https://ftp.gnu.org/gnu/gcc/gcc-<version>/gcc-<version>.tar.gz
   tar -xzvf gcc-<version>.tar.gz
   cd gcc-<version>
   ```

2. **运行 `download_prerequisites` 脚本：**
   - 这个脚本会自动下载并配置必要的依赖库。
   ```sh
   ./contrib/download_prerequisites
   ```

3. **配置 GCC 编译环境：**
   - 创建一个单独的构建目录以防止源码目录被污染。
   ```sh
   mkdir build
   cd build
   ```
   - 运行 `configure` 脚本配置编译选项。你可以根据需求添加其他选项。
   ```sh
   ../configure --enable-languages=c,c++ --disable-multilib --prefix=<you_prefix>
   ```

4. **编译 GCC：**
   - 使用 `make` 命令进行编译。这一步可能需要一些时间。
   ```sh
   make -j$(nproc)
   ```

5. **安装 GCC：**
   - 使用 `make install` 命令安装编译好的 GCC。
   ```sh
   sudo make install
   ```
6. **配置环境变量：**
    - 在 `~/.bashrc` 中配置环境变量
    ```sh
    export PATH=PATH:<you_prefix>/bin
    ```
7. **验证安装：**
   - 检查 GCC 版本以确保安装成功。
   ```sh
   gcc --version
   ```

### 示例
假设你要安装 GCC 10.3.0，以下是详细的命令步骤：

```sh
# 1. 下载并解压 GCC 源码
wget https://ftp.gnu.org/gnu/gcc/gcc-10.3.0/gcc-10.3.0.tar.gz
tar -xzvf gcc-10.3.0.tar.gz
cd gcc-10.3.0

# 2. 运行 download_prerequisites 脚本
./contrib/download_prerequisites

# 3. 创建构建目录
mkdir build
cd build

# 4. 配置编译选项
../configure --enable-languages=c,c++ --disable-multilib --prefix=<you_prefix>

# 5. 编译 GCC
make -j$(nproc)

# 6. 安装 GCC
sudo make install

# 7. 在~/.bashrc配置环境变量
export PATH=PATH:<you_prefix>/bin

# 8. 验证安装
gcc --version
```

使用 `./contrib/download_prerequisites` 脚本的主要好处是它简化了依赖库的下载和配置过程，使得整个安装流程更加自动化和易于管理。