SSH免密登录是通过使用公钥认证实现的，以下是实现SSH免密登录的一般步骤：

1. **生成SSH密钥对**：首先，在你的本地计算机上生成SSH密钥对，包括公钥和私钥。可以使用以下命令生成：

   ```bash
   ssh-keygen -t rsa
   ```

   这将在`~/.ssh`目录下生成`id_rsa`和`id_rsa.pub`文件，其中`id_rsa`是私钥，`id_rsa.pub`是公钥。

2. **复制公钥到目标服务器**：将你的公钥`id_rsa.pub`的内容复制到要访问的远程服务器的`~/.ssh/authorized_keys`文件中。你可以使用以下命令将公钥复制到远程服务器上：

   ```bash
   ssh-copy-id user@remote_host
   ```

   如果`ssh-copy-id`不可用，你也可以手动复制并粘贴公钥到远程服务器的`~/.ssh/authorized_keys`文件中。

3. **设置权限**：确保远程服务器上的`~/.ssh`目录和`authorized_keys`文件的权限正确设置。使用以下命令：

   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```

4. **测试SSH连接**：现在尝试使用SSH连接到远程服务器，你应该不再需要输入密码：

   ```bash
   ssh user@remote_host
   ```

   如果一切设置正确，你将能够无密码登录到远程服务器。

请注意，以上步骤中提到的`user`是你在远程服务器上的用户名，`remote_host`是远程服务器的IP地址或主机名。确保在执行这些步骤时小心操作，以免意外中断SSH连接。