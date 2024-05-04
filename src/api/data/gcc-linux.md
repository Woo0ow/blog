如果您想在CentOS上安装更高版本的GCC，您可以通过源代码编译方式来安装。以下是大致的步骤：

1. **下载GCC源代码**：首先，您需要从GCC官方网站下载您想要的GCC版本的源代码。请注意选择与您的CentOS版本兼容的版本。

2. **安装编译依赖项**：GCC编译器需要一些依赖项。您可以使用yum安装这些依赖项，以确保编译过程顺利进行。例如：

```
sudo yum install gcc-c++ glibc-devel gmp-devel mpfr-devel libmpc-devel
```

3. **解压源代码**：将下载的GCC源代码解压到您选择的目录中。

4. **配置编译选项**：在解压后的源代码目录中，执行configure脚本来配置编译选项。您可以根据需要指定一些选项，例如安装路径等。

```
./configure --prefix=/usr/local/gcc-<version> --disable-multilib
```

其中`<version>`是您下载的GCC版本号。

5. **编译和安装**：执行以下命令进行编译和安装：

```
make -j <num_cores>
sudo make install
```

其中`<num_cores>`是您计算机的核心数。此步骤可能需要一些时间，具体取决于您的计算机性能和GCC版本。

6. **更新PATH**：安装完成后，将新安装的GCC添加到系统PATH中，以便系统可以找到它。您可以编辑`~/.bashrc`文件或其他shell配置文件，添加类似以下内容：

```
export PATH=/usr/local/gcc-<version>/bin:$PATH
```

7. **验证安装**：最后，您可以通过运行以下命令来验证新版本的GCC是否成功安装：

```
gcc --version
```

如果一切顺利，您应该能够看到新版本的GCC信息。

通过这些步骤，您应该能够在CentOS上成功安装更高版本的GCC编译器。请注意，这种方式安装的GCC可能与系统默认的GCC共存，您可以通过调整PATH来选择使用哪个版本。