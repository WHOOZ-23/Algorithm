import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        String oct = sc.nextLine();

        for(int i=0; i<oct.length(); i++) {
            String bin = Integer.toBinaryString(Integer.parseInt(String.valueOf(oct.charAt(i))));

            if(0<i) {
                sb.append(String.format("%3s", bin).replace(" ", "0"));
            } else {
                sb.append(bin);
            }

        }

        System.out.println(sb);

        sc.close();
    }
}