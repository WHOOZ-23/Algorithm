function solution(files) {
    const regex = /^([^0-9]+)|(\d{1,5})|(.*)/g;

    files = files.sort((a, b) => {
        const file1 = a.toLowerCase().match(regex);
        const file2 = b.toLowerCase().match(regex);

        if (file1[0] === file2[0] && file1[1] === +file2[1]) {
            return 0;
        } else if (file1[0] === file2[0]) {
            return file1[1] - file2[1];
        } else if (file1[0] < file2[0]) {
            return -1;
        }
    });

    return files;
}