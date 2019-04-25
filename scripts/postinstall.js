if (process.platform === "darwin" && process.env.SKIP_DETOX !== 'true') {
	require("child_process").execFileSync(`${__dirname}/build_framework.ios.sh`, {
		stdio: "inherit"
	});
}
