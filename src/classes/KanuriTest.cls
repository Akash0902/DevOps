@isTest
public class KanuriTest {
    @isTest
    private static void warmTempTest(){
        Decimal res = Kanuri.FtoC(70);
        system.assertEquals(21.11, res);
    }
}